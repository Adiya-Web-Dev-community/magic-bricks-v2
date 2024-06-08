const mongoose = require("mongoose");

const jewellerySchema = new mongoose.Schema({
  sellerName: { type: String },
  propertyAdType: { type: String },
  jewelryType: { type: String },
  metalType: { type: String },
  gemstones: { type: String },
  weight: { type: String },
  weightUnit: { type: String },
  cut: { type: String },
  clarity: { type: String },
  color: { type: String },
  certification: { type: String },
  rentPrice: { type: Number },
  totalShares: { type: Number },
  availableShares: { type: Number },
  perSharePrice: { type: Number },
  additionalInfo: { type: String },
  imgArr: [{ type: String }],
  productType: { type: String, default: "jewellery" },
  additionalDetails: { propertyAdType: String },
  isVerified: { type: Boolean, default: false },
  postedOn: String,
  uniqueId: { type: String },
  sellerId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("jewellery_property", jewellerySchema);
