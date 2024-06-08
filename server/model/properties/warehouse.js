const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WarehouseSchema = new mongoose.Schema({
  //seller details
  sellerType: String,
  sellerName: { type: String },
  reraId: String,
  // property details
  propertyAdType: { type: String, default: "sell" },
  propertyType: { type: String, default: "warehouse" },
  propertyAge: { type: String },
  propertyId: String,
  area: { type: String },
  furnishing: { type: String },
  aminities: [{ type: String }],
  // location details
  street: { type: String },
  landmark: { type: String },
  city: { type: String },
  pin: { type: String },
  state: { type: String },
  nearbyPlaces: { type: String },
  // shares and rent prices
  totalShares: { type: Number, default: 0 },
  availableShares: { type: Number, default: 0 },
  perSharePrice: { type: Number, default: 0 },
  // images
  imgArr: [{ type: String }],
  view360ImgArr: [{ type: String }],
  // additional details
  whyInvestHere: [{ type: String }],
  additionalDetails: { type: String },
  // actions and status
  isVerified: { type: Boolean, default: false },
  postedOn: String,
  uniqueId: String,
  sellerId: Schema.Types.ObjectId,
});

module.exports = mongoose.model("warehouse_property", WarehouseSchema);
