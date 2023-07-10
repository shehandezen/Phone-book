const express = require("express");
const Contact = require("../../db/models/contact");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(`add contact api endpoint called by ${req.ip}`);
    if (req.file) {
      req.body.thumbnail = req.file.path;
    }

    console.log(req.file, req.body);

    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({
      status: "success",
      data: { contact },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      data: { err },
    });
  }
});

module.exports = router;
