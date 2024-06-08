const mongoose = require("mongoose");

const artSchema = new mongoose.Schema({
  sellerName: { type: String },
  propertyAdType: { type: String },
  artistName: { type: String },
  artworkTitle: { type: String },
  medium: { type: String },
  year: { type: String },
  dimensions: { type: String },
  dimensionUnit: { type: String },
  framed: { type: String },
  condition: { type: String },
  rentPrice: { type: Number },
  totalShares: { type: Number },
  availableShares: { type: Number },
  perSharePrice: { type: Number },
  additionalDetails: { type: String },
  imgArr: [{ type: String }],
  propertyType: { type: String, default: "art" },
  isVerified: { type: Boolean, default: false },
  postedOn: String,
  uniqueId: { type: String },
  sellerId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("art_property", artSchema);
