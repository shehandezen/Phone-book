const express = require("express");
const Contact = require("../../db/models/contact");

const router = express.Router();

router.delete("/:id", async (req, res) => {
  try {
    console.log(`delete contact api endpoint called by ${req.ip}`);
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: { deletedContact },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      data: { err },
    });
  }
});

module.exports = router;
