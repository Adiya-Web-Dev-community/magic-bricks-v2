require("dotenv").config();
const router = require("express").Router();
const userMiddleware = require("../middleware/user");

const { MongoClient, ObjectId } = require("mongodb");
//url for mongoClient connection and get list of all collections present in database
const url = process.env.MONGO_URL;

//get all posted properties
router.post("/get-propertycategory-data", async (req, resp) => {
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
            if (
              doc.propertyType === req.body.propertyCategory &&
              doc.isVerified === true
            ) {
              DocsList.push({
                ...doc,
              });
            }
          }
        }
      }
    }
    // console.log("Matching documents==>:", DocsList.length);
    resp.json({ success: true, DocsList: DocsList });
  } catch (err) {
    // console.log(err);
  } finally {
    client.close();
  }
});

//get individual property data
router.get("/property-data/:id", async (req, resp) => {
  let client;
  // console.log(req.params.id);
  try {
    client = await MongoClient.connect(url);
    const database = client.db("test");
    const collections = await database.listCollections().toArray();
    for (let collection of collections) {
      if (collection.name.includes("properties")) {
        const documents = database.collection(collection.name);
        const propertyData = await documents.findOne({
          _id: new ObjectId(req.params.id),
        });
        if (propertyData) {
          // console.log(propertyData);
          resp.json({ success: true, propertyData: propertyData });
        }
      }
    }
  } catch (err) {
    resp.json({ success: false, message: err });
  } finally {
    client.close();
  }
});

//get all posted properties posted by individual user (login required)
router.get("/get-data", userMiddleware, async (req, resp) => {
  // console.log("id", req.accountId);
  let client;
  try {
    client = await MongoClient.connect(url);
    // const database = client.db(process.env.DATABASE_NAME);
    const database = client.db("test");
    const collections = await database.listCollections().toArray();
    const DocsList = [];
    for (let collection of collections) {
      if (collection.name.includes("properties")) {
        documents = database.collection(collection.name);
        const findDocs = await documents
          .find({
            sellerId: new ObjectId(req.accountId),
          })
          .toArray();
        // console.log("===>", findDocs);

        if (findDocs.length > 0) {
          for (let doc of findDocs) {
            DocsList.push({
              ...doc,
            });
          }
        }
      }
    }
    // console.log("Matching documents==>:", DocsList);
    resp.json({ success: true, DocsList: DocsList });
  } catch (err) {
    console.log(err);
  } finally {
    // Close the MongoDB connection
    client.close();
  }
});

//delete data from profile listings(login required)
router.delete("/delete/:id", async (req, resp) => {
  // const url = process.env.DATABASE_URL;
  let client;
  console.log(req.params.id);
  try {
    client = await MongoClient.connect(url);
    const database = client.db(process.env.DATABASE_NAME);
    const collections = await database.listCollections().toArray();

    // print all collection names
    // const collectionNames = collections.map((collection) => collection.name);
    // console.log("Collections:", collectionNames);

    for (let collection of collections) {
      if (collection.name.includes("properties")) {
        const documents = database.collection(collection.name);
        const findDoc = await documents.findOneAndDelete({
          _id: new ObjectId(req.params.id),
        });
        if (findDoc.value) {
          // console.log("data object", findDoc.value);
          // console.log("found document", findDoc, collection.name);

          //return remaining documents after deleting
          const remainingDocs = await database
            .collection(collection.name)
            .find()
            .toArray();
          if (remainingDocs.length === 0) {
            console.log("document length is zero");
          } else {
            console.log("documents found", remainingDocs);
          }
          resp.json({ remainingDocs });
        } else {
          // console.log("no doc");
        }
      }
    }
  } catch (err) {
    // console.log(err);
  } finally {
    // Close the MongoDB connection
    client.close();
  }
});

module.exports = router;
