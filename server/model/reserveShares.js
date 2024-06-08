const mongoose = require("mongoose");

const ReserveShares = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  contact: {
    type: Number,
  },
  noOfShares: {
    type: Number,
  },
  sellerName: { type: String },
  sellerId: { type: String },
  propertyType: { type: String },
  propertyId: { type: String },
  paymentMethod: { type: String },
  totalAmount: { type: Number },
  investorId: mongoose.Schema.Types.ObjectId,
});

const ReserveSharesModel = mongoose.model("reserve-shares", ReserveShares);
module.exports = ReserveSharesModel;
