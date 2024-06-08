const mongoose = require("mongoose");

const SiteVisit = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  contact: { type: Number },
  date: { type: String },
  time: { type: Number },
  siteVisitStatus: { type: String, default: "pending" },
  propertyType: { type: String },
  address: { type: String },
  sellerName: { type: String },
  sellerContact: { type: Number },
});

const SiteVisitModel = mongoose.model("site-visit", SiteVisit);
module.exports = SiteVisitModel;
