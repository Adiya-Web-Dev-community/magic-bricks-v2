const router = require("express").Router();
const Cart = require("../model/cart");
const userMiddleware = require("../middleware/user");

const { MongoClient, ObjectId } = require("mongodb");
const url = process.env.MONGO_URL;

router.post("/add-to-cart", userMiddleware, async (req, resp) => {
  try {
    const findDoc = await Cart.findOne({ sellerId: req.accountId });
    if (findDoc) {
      findDoc.propertyIdArr.push(req.body.propertyId);
      await findDoc.save();
      console.log(findDoc.propertyIdArr.length);
    } else {
      console.log("no account with this id");
      const newCartData = await Cart.create({
        propertyIdArr: [req.body.propertyId],
        sellerId: req.accountId,
      });
      console.log(newCartData);
    }
  } catch (err) {
    console.log(err);
    resp.json({ success: false });
  }
});

// get cart data
router.get("/get-cart-data", userMiddleware, async (req, resp) => {
  let client;

  try {
    // get cart property id arr
    const cartAcc = await Cart.findOne({ sellerId: req.accountId });
    if (cartAcc) {
      const propertyIdArr = cartAcc.propertyIdArr;
      // console.log(propertyIdArr);

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
              DocsList.push({
                ...doc,
              });
            }
          }
        }
      }
      // console.log("Matching documents==>:", DocsList, propertyIdArr);
      const cart = DocsList.filter((property) =>
        propertyIdArr.includes(property._id.toString())
      );
      resp.json({ success: true, cart: cart });
    } else {
      return resp.json({ msg: "No cart found for this account" });
    }
  } catch (err) {
    console.log(err);
    resp.json({ success: false, msg: err.message });
  }
});

module.exports = router;
