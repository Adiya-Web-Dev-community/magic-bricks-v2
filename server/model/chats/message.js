const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    // name/id of sender
    // content of message
    // referece of chat which is belongs to
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    messageContent: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "chat" },
  },
  { timestamps: true }
);

const messageModel = mongoose.model("message", messageSchema);
module.exports = messageModel;
