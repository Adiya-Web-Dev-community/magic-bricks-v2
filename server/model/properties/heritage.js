const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HeritageSchema = new mongoose.Schema({
  //seller details
  sellerType: String,
  sellerName: { type: String },
  reraId: String,
  // property details
  propertyType: { type: String, default: "heritage" },
  propertyAdType: { type: String },
  propertyId: String,

  propertyName: { type: String },
  historicalSignificance: { type: String },
  yearBuilt: { type: String },
  archStyle: { type: String },
  restorationEfforts: { type: String },
  propertySize: { type: String },
  noOfBedroom: { type: String },
  noOfBathroom: { type: String },
  heritageDesignations: { type: String },
  pricingInfo: { type: String },
  landSize: { type: String },
  uniqueFeatures: [{ type: String }],
  ownerHistory: { type: String },
  renovationPlans: { type: String },
  financingOptions: { type: String },
  maintenanceCosts: { type: String },
  landmarks: [{ type: String }],
  sustainorConservationEfforts: [{ type: String }], //Sustainability or Conservation Efforts
  inspectionReports: [{ type: String }],
  sustainorConservationGroups: { type: String }, // Conservation Society or Preservation Group Involvement
  contactInfo: { type: String },
  heritagePropertyCouncilApprovals: { type: String }, //Heritage Property Council Approvals (if applicable)
  historicalDoc: [{ type: String }], // Documentation of Historical Artifacts (if included)
  historicalDoc: [{ type: String }], //Original Blueprints or Historical Documents (if available)

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

module.exports = mongoose.model("heritage_property", HeritageSchema);
