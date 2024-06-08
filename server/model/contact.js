const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  message: String,
});

const ContactModel = mongoose.model("contact", ContactSchema);
module.exports = ContactModel;
