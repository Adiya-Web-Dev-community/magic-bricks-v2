const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  categories: [
    {
      name: String,
      description: String,
      subcategories: [String],
      propertyType: String,
      showStatus: { type: Boolean, default: true },
    },
  ],
});

module.exports = mongoose.model("admin", AdminSchema);
