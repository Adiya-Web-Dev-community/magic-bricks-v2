const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  propertyIdArr: [String],
  sellerId: mongoose.Schema.Types.ObjectId,
});

const CartModel = mongoose.model("cart", cartSchema);
module.exports = CartModel;
