const router = require("express").Router();
const Contact = require("../model/contact");

router.post("/contact-form", async (req, resp) => {
  try {
    const newContact = await Contact.create(req.body);
    resp.json({ success: true, msg: "We'll get back to you soon", newContact });
  } catch (err) {
    resp.json({ success: false, msg: err.message });
  }
});

module.exports = router;
