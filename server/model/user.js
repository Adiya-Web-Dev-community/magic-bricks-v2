const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  city: String,
  country: String,
  contact: String,
  website: String,
  password: String,
  profileImg: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
  },
  emailSubscribe: { type: Boolean, default: true },
  otp: { type: Number, default: 0 },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
