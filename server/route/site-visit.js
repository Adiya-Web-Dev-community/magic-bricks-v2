require("dotenv").config();
const router = require("express").Router();
const nodemailer = require("nodemailer");
const SiteVisit = require("../model/site-visit");
const User = require("../model/user");
const { MongoClient, ObjectId } = require("mongodb");
const url = process.env.MONGO_URL;

router.post("/check-slots-avalibility", async (req, resp) => {
  console.log(req.body.date);
  try {
    const docs = await SiteVisit.find({ date: req.body.date });
    console.log(docs);
    const bookedTimeSlotArray = [];
    if (docs) {
      docs.forEach((obj) => {
        bookedTimeSlotArray.push(obj.time);
      });
      // console.log("=>", bookedTimeSlotArray);
    }
    resp.json({ data: bookedTimeSlotArray });
  } catch (err) {
    console.log(err);
  }
});

router.post("/book-site-visit", async (req, resp) => {
  let client;
  console.log(req.body);
  try {
    //   find seller
    let sellerDetails;
    const findSeller = await User.findOne({
      _id: req.body.sellerId,
    });
    if (findSeller) {
      console.log(findSeller);
      sellerDetails = findSeller;
    } else {
      console.log("No seller account exists with this id");
    }
    // find seller ends

    // find property
    let propertyDetails;
    client = await MongoClient.connect(url);
    const database = client.db("test");
    const collections = await database.listCollections().toArray();
    for (let collection of collections) {
      if (collection.name.includes("properties")) {
        const documents = await database.collection(collection.name);
        const findDoc = await documents.findOne({
          _id: new ObjectId(req.body.propertyId),
        });
        if (findDoc) {
          propertyDetails = findDoc;
          console.log(propertyDetails);
          break;
        } else {
          console.log("No data found matching this id");
        }
      }
    }
    // find property ends

    //  send mail to buyer after booking
    const newSiteVisit = await SiteVisit.create({
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
      date: req.body.date,
      time: req.body.time,
      propertyType: propertyDetails.propertyType,
      address: `${propertyDetails.landmark}, ${propertyDetails.city},${propertyDetails.state}`,
      sellerName: propertyDetails.sellerName,
      // sellerContact: sellerDetails.contact,
    });

    let BuyerTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    let buyerMailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: req.body.email,
      subject: "Booking Confirmation of site visit",
      text: `
      Dear ${req.body.name},
      Your booking for the site visit has been confirmed,
      Buyer's information:-
      name:${req.body.name},
      email:${req.body.name},
      contact:${req.body.contact},
      Site visit information:-
      date:${req.body.date},
      time:${req.body.time},
      Property Address:${propertyDetails.street},${propertyDetails.landmark},${propertyDetails.city}, ${propertyDetails.state}, ${propertyDetails.pin}
      `,
    };
    BuyerTransporter.sendMail(buyerMailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent to buyer: " + info.response);
      }
    });
    //   send mail to buyer after booking ends

    //   send mail to seller about site visit
    let sellerTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    let toSellerMailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: req.body.email,
      subject: "New site visit",
      text: `
      Your received a notification for the new site visit,
      Property Type:${propertyDetails.apartment}, 
      Property Listed for:${propertyDetails.propertyAdType},
      Property Address:${propertyDetails.street},${propertyDetails.landmark},${propertyDetails.city}, ${propertyDetails.state}, ${propertyDetails.pin}
      date:${req.body.date},
      time:${req.body.time},
      `,
    };
    sellerTransporter.sendMail(toSellerMailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent to seller: " + info.response);
        return resp.status(200).json({
          success: true,
          message: ` Your site has been confirmed .please check your email `,
        });
      }
    });
    //   send mail to seller about site visit ends
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
});

//get all data of site visit
router.get("/site-visit-data", async (req, resp) => {
  try {
    const allData = await SiteVisit.find();
    console.log(allData);
    resp.json({ success: true, list: allData });
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
});

module.exports = router;
