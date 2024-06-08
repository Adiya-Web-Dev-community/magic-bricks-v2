const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use(require("./route/admin"));
app.use(require("./route/user"));
app.use(require("./route/user-forgot-password"));
app.use(require("./route/properties"));
app.use(require("./route/contact"));
app.use(require("./route/listings"));
app.use(require("./route/reserveShares"));
app.use(require("./route/site-visit"));
app.use(require("./route/cart"));
app.use(require("./route/chats"));
app.use(require("./route/analysis"));
app.use(require("./route/payment"));

app.get("/", async (req, resp) => {
  resp.send("Welcome to Stake");
});

module.exports = app;
