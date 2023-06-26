const express = require("express");
const Contact = require("../../db/models/contact");

const router = express.Router();

router.get("/", async (req, res) => {
  console.log(`get contacts api endpoint called by ${req.ip}`);
  try {
    const contacts = await Contact.find({ fullName: /req.query.name/ });
    res.status(200).json({
      status: "success",
      data: { contacts },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      data: { err },
    });
  }
});

module.exports = router;
