const router = require("express").Router();
const mongoose = require("mongoose");

//count for Inventory Trend analysis of properties
router.get("/count-properties", async (req, resp) => {
    try {
        const db = mongoose.connection;
        const databaseCollections = await db.db.listCollections().toArray();
        const propertiesCollections = databaseCollections.filter((collection) =>
            collection.name.endsWith("_properties")
        );
        const data = await Promise.all(
            propertiesCollections.map(async (collection) => {
                const count = await db
                    .collection(collection.name)
                    .countDocuments();
                return {
                    name: collection.name,
                    count: count,
                };
            })
        );
        resp.json({
            success: true,
            msg: "Count of Properties Listed",
            data: data,
        });
    } catch (err) {
        resp.json({ success: false, msg: err.message });
    }
});
module.exports = router;
