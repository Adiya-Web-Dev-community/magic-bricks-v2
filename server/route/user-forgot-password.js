require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const User = require("../model/user");

//send email with OTP
function sendOtpMail(email, otp) {
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
                OTP:${otp}
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

// check email and send otp
router.post("/send-otp", async (req, resp) => {
  // console.log(req.body);
  const min = 1000;
  const max = 9999;
  const generateOTP = Math.floor(Math.random() * (max - min + 1)) + min;
  try {
    const findAcc = await User.findOne({ email: req.body.email });
    if (findAcc) {
      const updateDoc = await User.updateOne(
        { email: req.body.email },
        { $set: { otp: generateOTP } }
      );
      if (updateDoc.matchedCount === 1) {
        sendOtpMail(req.body.email, generateOTP);
        resp.json({
          success: true,
          msg: "OTP sent. Please check your email",
          otp: generateOTP,
        });
      } else {
        resp.json({
          success: false,
          msg: "something went wrong. Please resend OTP",
        });
      }
    } else {
      resp.json({
        success: false,
        msg: "User not found",
      });
    }
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// verify otp
router.post("/verify-otp", async (req, resp) => {
  // console.log(req.body);
  try {
    const findAcc = await User.findOne({ email: req.body.email });
    if (findAcc) {
      if (findAcc.otp === Number(req.body.otp)) {
        resp.json({ success: true, msg: "OTP matched" });
      } else {
        resp.json({ success: false, msg: "Invalid OTP" });
      }
    }
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

// set new password
router.post("/set-new-password", async (req, resp) => {
  const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);
  // console.log(hashedPassword);

  try {
    const findAcc = await User.findOne({ email: req.body.email });
    if (findAcc) {
      const updatePassword = await User.updateOne(
        { email: req.body.email },
        { $set: { password: hashedPassword } }
      );
      // console.log(updatePassword);
      if (updatePassword.matchedCount === 1) {
        resp.json({ success: true, msg: "Password set successfully" });
      } else {
        console.log("somehting went wrong. Passowrd not updated");
      }
    }
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

module.exports = router;
