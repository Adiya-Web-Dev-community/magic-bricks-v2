const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FarmhouseSchema = new mongoose.Schema({
  // seller details
  sellerType: String,
  sellerName: { type: String },
  reraId: { type: String },
  // property details
  propertyType: { type: String, default: "farmhouse" },
  propertyAdType: { type: String, default: "sell" },
  propertyId: { type: String },
  propertyAge: { type: String },
  farmhouseName: { type: String },
  area: { type: String },
  carpetArea: String,
  bedroom: { type: Number },
  bathroom: { type: Number },
  totalFloors: String,
  totalLifts: String,
  facing: String,
  overlooking: String,
  flooringType: String,
  waterAvailability: String,
  totalBalconies: String,
  statusOfElectricity: String,
  typeOfOwnership: String,
  furnishing: { type: String },
  possessionStatus: String,
  aminities: [{ type: String }],
  //location details
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
  additionalRooms: [{ type: String }],
  approvals: [{ type: String }],
  whyInvestHere: [{ type: String }],
  additionalDetails: { type: String },
  // actions and status
  isVerified: { type: Boolean, default: false },
  postedOn: String,
  uniqueId: String,
  sellerId: Schema.Types.ObjectId,
});

module.exports = mongoose.model("farmhouse_property", FarmhouseSchema);
