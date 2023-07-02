const express = require("express");
const Contact = require("../../db/models/contact");

const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    console.log(`update contact api endpoint called by ${req.ip}`);
    const options = { new: true };
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body } },
      options
    );
    res.status(201).json({
      status: "success",
      data: { updatedContact },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      data: { err },
    });
  }
});

module.exports = router;
