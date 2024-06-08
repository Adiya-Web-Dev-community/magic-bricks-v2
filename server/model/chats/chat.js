const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    //chatname
    //isGroupChat=>groupAdmin
    // users=>single chat 2 users / group chat multiple users
    //lastestMessage
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const chatModel = mongoose.model("chat", chatSchema);
module.exports = chatModel;
