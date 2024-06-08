const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PropertyWithView = new mongoose.Schema({
  // seller details
  sellerType: { type: String },
  sellerName: { type: String },
  reraId: { type: String },
  // property details
  projectType: { type: String, default: "property_with_view" },
  projectName: String,
  area: { type: Number },
  carpetArea: { type: Number },
  floorsPlan: { type: String },
  paymentPlans: { type: String },
  noOfBeds: { type: Number, default: 0 },
  noOfBaths: { type: Number, default: 0 },
  noOfUnits: { type: Number, default: 0 },
  maintenanceFees: { type: Number, default: 0 },
  projectExptComptDate: { type: String }, //Expected Completion Date
  //   constrution updates
  constUpdates: [{ type: String }],
  //   nearby facilities
  nearbyFacilities: [{ type: String }],
  //   approvals
  legalApprovals: [{ type: String }],
  //aminities
  amenities: { tyee: String },
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

module.exports = mongoose.model(
  "property_with_view_property",
  PropertyWithView
);
