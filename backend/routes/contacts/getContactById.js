const express = require("express");
const Contact = require("../../db/models/contact");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    console.log(`get contact by id api endpoint called by ${req.ip}`);
    // console.log(req.user, req.session);
    const contact = await Contact.find({ _id: req.params.id });
    res.status(200).json({
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
