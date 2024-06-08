const router = require("express").Router();
const { body, validationResult } = require("express-validator");
const ReserveShares = require("../model/reserveShares");
const userMiddleware = require("../middleware/user");

const { MongoClient, ObjectId } = require("mongodb");
const url = process.env.MONGO_URL;

router.post("/reserve-shares", userMiddleware, async (req, resp) => {
  try {
    const newData = await ReserveShares.create({
      ...req.body,
      investorId: req.accountId,
    });
    // console.log(req.body);
    resp.json({ success: true, newReservedShare: newData });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

//update shares in backend after buying shares
router.patch("/update-shares/:id", async (req, resp) => {
  console.log("noof shhares===>", req.body.noOfShares);
  let client;
  try {
    client = await MongoClient.connect(url);
    const database = client.db("test");
    const collections = await database.listCollections().toArray();

    for (let collection of collections) {
      if (collection.name.includes("properties")) {
        documents = database.collection(collection.name);
        const propertyObj = await documents.findOne({
          _id: new ObjectId(req.params.id),
        });
        if (propertyObj) {
          if (propertyObj.propertyAdType === "sell") {
            console.log("initial shares", propertyObj.availableShares);
            const updatedShares =
              parseInt(propertyObj.availableShares) -
              parseInt(req.body.noOfShares);
            const dataObj = await documents.updateOne(
              { _id: new ObjectId(req.params.id) },
              {
                $set: {
                  availableShares: updatedShares,
                },
              }
            );
          }
        }
      }
    }
    //   const updatedDocument = await documents.findOne({
    //     _id: new ObjectId(req.params.id),
    //   });
    //   resp.json({
    //     success: true,
    //     message: "document updated successfully",
    //   });
    //   console.log(
    //     "updated document=====>",
    //     updatedDocument.availableShares
    //   );
    // } else {
    //   console.log("No data found");
    // }
    // }
  } catch (err) {
    console.log(err);
  }
});

//all reserved shares data
router.get("/reserve-share-data", async (req, resp) => {
  try {
    const reseverShareData = await ReserveShares.find();
    if (reseverShareData) {
      console.log(reseverShareData);
      resp.json({ success: true, list: reseverShareData });
    } else {
      resp.json({ success: false, message: "NO DATA FOUND" });
    }
  } catch (err) {
    resp.json({ success: false, message: err });
  }
});

//users investment (login required)
router.get("/user-investments", userMiddleware, async (req, resp) => {
  console.log(req.accountId);
  try {
    const reseverShareData = await ReserveShares.find({
      investorId: req.accountId,
    });
    console.log(reseverShareData);
    if (reseverShareData) {
      console.log(reseverShareData);
      resp.json({ success: true, list: reseverShareData });
    } else {
      resp.json({ success: false, message: "NO DATA FOUND" });
    }
  } catch (err) {
    resp.json({ success: false, message: err });
  }
});

module.exports = router;
