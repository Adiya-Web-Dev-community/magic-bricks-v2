const router = require("express").Router();
const Apartment = require("../model/properties/apartment");
const Farmhouse = require("../model/properties/farmhouse");
const Land = require("../model/properties/land");
const Resort = require("../model/properties/resort");
const Villa = require("../model/properties/villa");
const Shop = require("../model/properties/shop");
const Warehouse = require("../model/properties/warehouse");
const Office = require("../model/properties/office");
const Art = require("../model/properties/art");
const Yacht = require("../model/properties/yacht");
const Car = require("../model/properties/car");
const Jewellery = require("../model/properties/jewellery");
const UnderConstruction = require("../model/properties/underconstructionproject");
const Heritage = require("../model/properties/heritage");
const OffPlanProjectsSchema = require("../model/properties/offPlanProject");
const PropertyWithView = require("../model/properties/propertyWithView");

const userMiddleware = require("../middleware/user");


// post apartment
router.post("/apartment-form", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const newData = await Apartment.create({
      ...req.body,
      sellerId: req.accountId,
    });
    resp.json({
      success: true,
      msg: "Your property has been listed",
      data: newData,
    });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// post farmhouse
router.post("/farmhouse-form", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const newData = await Farmhouse.create({
      ...req.body,
      sellerId: req.accountId,
    });
    resp.json({
      success: true,
      msg: "Your property has been listed",
      data: newData,
    });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// post resort
router.post("/resort-form", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const newData = await Resort.create({
      ...req.body,
      sellerId: req.accountId,
    });
    resp.json({
      success: true,
      msg: "Your property has been listed",
      data: newData,
    });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// post villa
router.post("/villa-form", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const newData = await Villa.create({
      ...req.body,
      sellerId: req.accountId,
    });
    resp.json({
      success: true,
      msg: "Your property has been listed",
      data: newData,
    });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// post shop
router.post("/shop-form", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const newData = await Shop.create({
      ...req.body,
      sellerId: req.accountId,
    });
    resp.json({
      success: true,
      msg: "Your property has been listed",
      data: newData,
    });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// post warehouse
router.post("/warehouse-form", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const newData = await Warehouse.create({
      ...req.body,
      sellerId: req.accountId,
    });
    resp.json({
      success: true,
      msg: "Your property has been listed",
      data: newData,
    });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// post office
router.post("/office-form", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const newData = await Office.create({
      ...req.body,
      sellerId: req.accountId,
    });
    resp.json({
      success: true,
      msg: "Your property has been listed",
      data: newData,
    });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// post land //check once
router.post("/land-form", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const newData = await Land.create({
      ...req.body,
      sellerId: req.accountId,
    });
    resp.json({
      success: true,
      msg: "Your property has been listed",
      data: newData,
    });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// post under construction
router.post("/underconstruction-form", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const newData = await UnderConstruction.create({
      ...req.body,
      sellerId: req.accountId,
    });
    resp.json({
      success: true,
      msg: "Your property has been listed",
      data: newData,
    });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// post heritage
router.post("/heritage-form", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const newData = await Heritage.create({
      ...req.body,
      sellerId: req.accountId,
    });
    resp.json({
      success: true,
      msg: "Your property has been listed",
      data: newData,
    });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

//post Off Plan Projects 
router.post("/off-plan-form", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const newData = await OffPlanProjectsSchema.create({
      ...req.body,
      sellerId: req.accountId,
    });
    resp.json({
      success: true,
      msg: "Your property has been listed",
      data: newData,
    });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// post Property With View Form
router.post("/property-with-view-form", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const newData = await PropertyWithView.create({
      ...req.body,
      sellerId: req.accountId,
    });
    resp.json({
      success: true,
      msg: "Your property has been listed",
      data: newData,
    });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});
// post art
router.post("/art-form", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const newData = await Art.create({
      ...req.body,
      sellerId: req.accountId,
    });
    resp.json({
      success: true,
      msg: "Your property has been listed",
      data: newData,
    });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// post yacht
router.post("/yacht-form", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const newData = await Yacht.create({
      ...req.body,
      sellerId: req.accountId,
    });
    resp.json({
      success: true,
      msg: "Your property has been listed",
      data: newData,
    });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// post car
router.post("/car-form", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const newData = await Car.create({
      ...req.body,
      sellerId: req.accountId,
    });
    resp.json({
      success: true,
      msg: "Your property has been listed",
      data: newData,
    });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// post jewellery
router.post("/jewellery-form", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const newData = await Jewellery.create({
      ...req.body,
      sellerId: req.accountId,
    });
    resp.json({
      success: true,
      msg: "Your property has been listed",
      data: newData,
    });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

module.exports = router;
