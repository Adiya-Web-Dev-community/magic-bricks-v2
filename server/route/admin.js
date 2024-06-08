require("dotenv").config();
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { MongoClient, ObjectId } = require("mongodb");
const Admin = require("../model/admin");
const User = require("../model/user");
const adminMiddleware = require("../middleware/admin");
const url = process.env.MONGO_URL;
const mongoose = require("mongoose");
const Objectid = mongoose.Types.ObjectId;

// get admin account details
router.get("/admin-details", async (req, resp) => {
  try {
    const admin = await Admin.find();
    resp.send(admin);
  } catch (err) {
    console.log(err);
  }
});
//admin login
router.post("/admin-login", async (req, resp) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const existingAccount = await Admin.findOne({ email: email });
    if (existingAccount) {
      const matchPassword = bcrypt.compare(password, existingAccount.password);
      if (matchPassword) {
        const tokenData = {
          _id: existingAccount._id,
        };
        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
          expiresIn: "1d",
        });
        // console.log("signined in data=>", existingAccount, token);
        resp.json({
          success: true,
          message: "SignIn successful",
          data: { signinData: existingAccount, token: token },
        });
      } else {
        resp.json({ success: false, message: "Password not correct" });
      }
    } else {
      resp.json({
        success: false,
        message: "Admin not found. Please create new account",
      });
    }
  } catch (error) {
    resp.status(400).json({ message: error.message });
  }
});

//get all property data for verification
router.get("/data-for-verification", async (req, resp) => {
  let client;
  try {
    client = await MongoClient.connect(url);
    const database = client.db("test");
    const collections = await database.listCollections().toArray();
    const DocsList = [];
    for (let collection of collections) {
      if (collection.name.includes("properties")) {
        documents = database.collection(collection.name);
        const findDocs = await documents.find({}).toArray();

        if (findDocs.length > 0) {
          for (let doc of findDocs) {
            if (doc.isVerified === false) {
              DocsList.push({
                ...doc,
              });
            }
          }
        }
      }
    }
    console.log("Matching documents==>:", DocsList.length);
    resp.json({ success: true, DocsList: DocsList });
  } catch (err) {
    // console.log(err);
  }
});

//send verification status
router.patch("/verify-success/:id", async (req, resp) => {
  console.log(req.params.id);
  let client;
  try {
    client = await MongoClient.connect(url);
    const database = client.db("test");
    const collections = await database.listCollections().toArray();

    for (let collection of collections) {
      if (collection.name.includes("properties")) {
        const documents = database.collection(collection.name);
        const findDoc = await documents.findOne({
          _id: new ObjectId(req.params.id),
        });
        if (findDoc) {
          const verificationStatus = true;
          const updateDoc = await documents.updateOne(
            {
              _id: new ObjectId(req.params.id),
            },
            {
              $set: { isVerified: verificationStatus },
            }
          );

          //return updates document
          const updatedDocument = await documents.findOne({
            _id: new ObjectId(req.params.id),
          });
          resp.json({
            success: true,
            message: "Document updated successfully",
            updatedDocument: updatedDocument,
          });
        }
      }
    }
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
});

//get all seller details
router.get("/user-accounts", async (req, resp) => {
  try {
    const allSellersData = await User.find();
    console.log(allSellersData);
    resp.json({ success: true, list: allSellersData });
  } catch (err) {
    resp.json({ success: false, message: err.message });
  }
});

// manage categories
router.post("/add-category", adminMiddleware, async (req, resp) => {
  const name = req.body.name.toLowerCase();

  try {
    const findDoc = await Admin.findById(req.adminId);
    if (findDoc) {
      findDoc.categories.push({
        name: name,
        description: req.body.description,
        propertyType: req.body.propertyType,
      });
    }
    await findDoc.save();
    const doc = await Admin.findById(req.adminId);
    resp.json({ success: true, doc });
  } catch (err) {
    console.log(err);
  }
});

// get categories
router.get("/get-categories", async (req, resp) => {
  // console.log(req.adminId);
  try {
    const findDoc = await Admin.findOne({ _id: "6663de244649493d3070e354" });
    console.log(findDoc);
    if (findDoc) {
      resp.json({ success: true, data: findDoc });
    }
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// change category status
router.put(
  `/change-category-status/:id`,
  adminMiddleware,
  async (req, resp) => {
    const categoryObjectId = new Objectid(req.params.id);
    try {
      // console.log(req.params.id, req.body.checked);
      const document = await Admin.findById(req.adminId);
      // console.log(findDoc);
      if (document) {
        // Find the category object within the document's categories array
        const categoryObject = document.categories.find((category) =>
          category._id.equals(categoryObjectId)
        );

        if (!categoryObject) {
          console.log("Category not found in the document.");
          return null;
        } else {
          // Print or return the category object
          categoryObject.showStatus = req.body.checked;
          await document.save();
          console.log("Category Object:", categoryObject);
          resp.json({ success: true, msg: "updated successfully" });
          return categoryObject;
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
);

module.exports = router;
