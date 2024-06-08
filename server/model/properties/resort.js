const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ResortSchema = new mongoose.Schema({
  //seller details
  sellerType: String,
  sellerName: { type: String },
  reraId: String,
  // property details
  propertyType: { type: String, default: "resort" },
  propertyAdType: { type: String },
  propertyId: String,
  resortName: { type: String },
  street: { type: String },
  landmark: { type: String },
  city: { type: String },
  pin: { type: String },
  state: { type: String },
  nearbyPlaces: { type: String },
  propertyAge: { type: String },
  area: { type: String },
  noOfRooms: { type: String },
  aminities: [{ type: String }],
  // location details
  totalShares: { type: Number },
  availableShares: { type: Number },
  perSharePrice: { type: Number },
  additionalInfo: { type: String },
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

module.exports = mongoose.model("resort_property", ResortSchema);
