require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const userMiddleware = require("../middleware/user");
const { MongoClient, ObjectId } = require("mongodb");
const url = process.env.MONGO_URL;

//send email with OTP
function sendOtpMail(email) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "User created successfully",
    text: `
                Hello from STAKE,
                Thank you for choosing us!
                `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return { error: error };
    } else {
      console.log("Email sent: " + info.response);
      return resp.json({ success: true, message: info.response });
    }
  });
}

//ROUTE TO SEND EMAIL
router.post("/user-signup", async (req, res) => {
  console.log("req.body", req.body);
  try {
    const { email } = req.body;
    // const emailFound = await User.findOne({ email });
    // if (emailFound) {
    //   if (!emailFound.isVerified) {
    //     console.log("emailFoundButNotVerified => ", emailFound);
    //     sendOtpMail(emailFound.email, emailFound.otp);
    //     return res.status(200).json({
    //       success: false,
    //       message:
    //         "User found but not verified. OTP has been resent. Please check your email",
    //     });
    //   } else if (emailFound.isVerified) {
    //     console.log("Email already in use. Try to login");
    //     return res.status(200).json({
    //       success: false,
    //       message: "Email already in use. Try to login",
    //     });
    //   }
    // } else {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
    });
    console.log(" new user", newUser);
    sendOtpMail(email);
    return res.status(200).json({
      success: true,
      message: "created User",
      data: newUser,
    });
    // }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// user signin
//Sign in route (only registered accounts can access)
router.post("/user-signin", async (req, resp) => {
  const { email, password } = req.body;

  try {
    const existingAccount = await User.findOne({ email: email });
    if (existingAccount) {
      const passwordMatch = await bcrypt.compare(
        password,
        existingAccount.password
      );
      if (passwordMatch) {
        const dataTobeSentToFrontend = {
          _id: existingAccount._id,
        };
        const token = jwt.sign(
          dataTobeSentToFrontend,
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: "1d",
          }
        );
        // console.logs("signined in data=>", existingAccount, token);
        resp.json({
          success: true,
          message: "SignIn successful",
          token: token,
          account: existingAccount,
          token: token,
        });
      } else {
        resp.json({ success: false, message: "Password not correct" });
      }
    } else {
      resp.json({
        success: false,
        message: "account not found. Please create new account",
      });
    }
  } catch (error) {
    resp.status(400).json({ message: error.message });
  }
});

//email unsubscribe
router.post("/email-status", userMiddleware, async (req, resp) => {
  try {
    const findAccount = await User.findOne({ _id: req.accountId });
    findAccount.emailSubscribe = !req.body.toggleSwitch;
    await findAccount.save();
    const againFindAccount = await User.findOne({ _id: req.accountId });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// get user data
router.get("/get-user-data", userMiddleware, async (req, resp) => {
  try {
    const userData = await User.findOne({ _id: req.accountId });
    resp.json({ success: true, userData });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// edit profile data
router.put("/edit-profile", userMiddleware, async (req, resp) => {
  console.log(req.body);

  const updateDoc = await User.findByIdAndUpdate(req.accountId, req.body);

  const updatedDoc = await User.findOne({ _id: req.accountId });
  console.log(updatedDoc);
  resp.json({ success: true, updatedDoc });
});

module.exports = router;
