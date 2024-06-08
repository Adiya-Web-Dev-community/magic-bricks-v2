const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  sellerName: { type: String },
  propertyAdType: { type: String },
  manufacturer: { type: String },
  model: { type: String },
  year: { type: String },
  mileage: { type: String },
  exteriorColor: { type: String },
  interiorColor: { type: String },
  transmission: { type: String },
  engineType: { type: String },
  fuelType: { type: String },
  driveTrain: { type: String },
  vinNumber: { type: String },
  rentPrice: { type: Number },
  totalShares: { type: Number, default: 0 },
  availableShares: { type: Number, default: 0 },
  perSharePrice: { type: Number, default: 0 },
  imgArr: [{ type: String }],
  propertyType: { type: String, default: "car" },
  additionalDetails: { propertyAdType: String },
  postedOn: String,
  isVerified: { type: Boolean, default: false },
  postedOn: String,
  uniqueId: { type: String },
  sellerId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("car_property", carSchema);
