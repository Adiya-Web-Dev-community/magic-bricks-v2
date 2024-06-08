require("dotenv").config();
const app = require("./app");
const port = process.env.POST || 5000;

//mongodb connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.log("OOPS! database connection failed", err);
  });

//server connection
app.listen(port, () => {
  console.log("Server is running on port:", port);
});
