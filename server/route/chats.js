const router = require("express").Router();
const User = require("../model/user");
const Admin = require("../model/admin");
const Chats = require("../model/chats/chat");
const Message = require("../model/chats/message");
const userMiddleware = require("../middleware/user");

router.get("/chats", async (req, resp) => {
  const chats = await Chats.find({});
  resp.send(chats);
});

// fetch all users except the one who is logged in
// URL?search=user_name
// more than one query
// URL?search=query_keyoword&lastname=query_keyword
router.get("/search-user", userMiddleware, async (req, resp) => {
  const searchQuery = req.query.search;
  console.log(searchQuery);
  const users = await User.find({
    $or: [
      { firstName: { $regex: searchQuery, $options: "i" } },
      { email: { $regex: searchQuery, $options: "i" } },
    ],
    _id: { $ne: req.accountId },
  });
  resp.json({ users });
});

// fetch chat for login user
// get all chats of which login user is part of
router.get("/login-user-chats", userMiddleware, async (req, resp) => {
  try {
    // find id from users array of chats
    const chatData = await Chats.find({
      users: { $eq: req.accountId },
    })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name email",
        });
      });

    resp.send(chatData);
  } catch (err) {
    resp.send(err);
  }
});

// access chat (not group chat) -> if not exists create new one
router.post("/access-chat", userMiddleware, async (req, resp) => {
  console.log(req.accountId, req.body.userId);

  const { userId } = req.body;
  if (!userId) {
    console.log("No userId sent");
    return;
  }

  let isChat = await Chats.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.accountId } } },
      { users: { $elemMatch: { $eq: req.body.userId } } },
    ],
    // populate users array which contains ids
  });

  isChat =
    (await User.populate(isChat, {
      path: "latestMessage.sender",
      select: "name email profileImg",
    })) ||
    (await Admin.populate(isChat, {
      path: "latestMessage.sender",
      select: "name email profileImg",
    }));

  if (isChat.length > 0) {
    resp.send(isChat[0]);
  } else {
    let chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.accountId, req.body.userId],
    };
    try {
      const createdChat = await Chats.create(chatData);
      const fullChat = await Chats.findOne({ _id: createdChat._id })
        // all the details will be shown except password
        //   .populate(
        //   "users",
        //   "-password"
        // );
        .populate("users", "firstName lastName email profileImg");
      console.log(fullChat);
      resp.send(fullChat);
    } catch (err) {
      console.log(err);
      resp.send(err);
    }
  }
});

//create group
router.post("/create-group", userMiddleware, async (req, resp) => {
  console.log(req.body);
  if (!req.body.users || !req.body.name) {
    return resp.send({ msg: "Please fill all the details" });
  }

  let users = JSON.parse(req.body.users);
  if (users.length < 2) {
    return resp.send("More than 2 users are required to form a group");
  }

  users.pull(req.user);
  try {
    const groupChat = await Chats.create({
      chatName: req.body.name,
      users: users,
      isGroupChat: true,
      groupAdmin: req.accountId,
    });
    const fullGroupChat = await Chats.findOne({ _id: groupChat._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");
    resp.send(fullGroupChat);
  } catch (err) {
    resp.send(err);
  }
});

// rename group
router.put("/rename-group", async (req, resp) => {
  const { chatId, chatName } = req.body;

  const updatedChat = await Chats.findByIdAndUpdate(
    chatId,
    {
      chatName: chatName,
    },
    { new: true }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!updatedChat) {
    resp.json({ msg: "chat not found" });
  } else {
    resp.json({ msg: "group chat name updated", updatedChat });
  }
});

// add member to group
router.put("/add-to-group", async (req, resp) => {
  const { chatId, userId } = req.body;
  const added = await Chats.findByIdAndUpdate(
    chatId,
    { $push: { users: userId } },
    { new: true }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!added) {
    resp.json({ msg: "chat not found" });
  } else {
    resp.json({ msg: "Added in group", added });
  }
});

//remove group
router.put("/remove-from-group", async (req, resp) => {
  try {
    const { chatId, userId } = req.body;
    const removed = await Chats.findByIdAndUpdate(
      chatId,
      { $pull: { users: userId } },
      { new: true }
    )
      .populate("users", "-password")
      .populate("groupAdmin", "-password");

    if (!removed) {
      resp.json({ msg: "Chat not found" });
    } else {
      resp.json({ msg: "Removed from group", removed });
    }
  } catch (err) {
    resp.json({ err: err.message });
  }
});

// MESSAGE ROUTES

// send message
router.post("/new-message", userMiddleware, async (req, resp) => {
  //requirements
  /*
  1)chatid, on which chat we suppose to send the message
  2)message
  3)sender of message from middleware
  */

  const { chatId, messageContent } = req.body;
  if (!chatId || !messageContent) {
    return resp.send("Invalid data sent into request");
  }

  let newMessage = {
    sender: req.accountId,
    messageContent: messageContent,
    chat: chatId,
  };

  try {
    let message = await Message.create(newMessage);
    message = await message.populate("sender", "firstName email profileImg");
    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "firstName email profileImg",
    });
    await Chats.findByIdAndUpdate(chatId, {
      latestMessage: message,
    });
    resp.json({ message });
  } catch (err) {
    console.log(err);
    resp.json({ errMsg: err });
  }
});

// get all messages of single chat
router.get("/all-chats/:chatId", async (req, resp) => {
  try {
    const allChats = await Message.find({ chat: req.params.chatId }).populate(
      "sender",
      "firstName profileImg"
    );
    // .populate("chat");
    resp.send(allChats);
  } catch (err) {
    resp.send(err);
  }
});

module.exports = router;
