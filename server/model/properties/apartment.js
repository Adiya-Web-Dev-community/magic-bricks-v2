const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ApartmentSchema = new mongoose.Schema({
  // seller details
  sellerType: { type: String },
  sellerName: { type: String },
  reraId: { type: String },
  // property details
  propertyAdType: { type: String, default: "sell" },
  propertyType: { type: String, default: "apartment" },
  propertyId: { type: String },
  propertyAge: { type: String },
  typeOfOwnership: { type: String },
  apartmentName: { type: String },
  totalFloors: { type: String },
  floorNo: { tyee: String },
  possessionStatus: { type: String },
  totalLifts: { type: String },
  facing: { type: String },
  carpetArea: { type: String },
  flooringType: { type: String },
  waterAvailability: { type: String },
  statusOfElectricity: { type: String },
  totalBalconies: { type: String },
  area: { type: String },
  bedroom: { type: Number },
  bathroom: { type: Number },
  furnishing: { type: String },
  // mainities
  aminities: [{ type: String }],
  // location details
  street: { type: String },
  landmark: { type: String },
  city: { type: String },
  pin: { type: String },
  state: { type: String },
  nearbyPlaces: { type: String },
  // shares and rent prices
  rentPrice: { type: Number },
  totalShares: { type: Number },
  availableShares: { type: Number },
  perSharePrice: { type: Number },
  // upload images
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
  uniqueId: { type: String },
  sellerId: Schema.Types.ObjectId,
});

module.exports = mongoose.model("apartment_property", ApartmentSchema);
