const express = require("express");
const Contact = require("../../db/models/contact");

const router = express.Router();

router.get("/user/:id", async (req, res) => {
  console.log(`get contacts api endpoint called by ${req.ip}`, req.params.id);
  try {
    const id = req.params.id;
    const contacts = await Contact.find({
      userId: id,
    });
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
