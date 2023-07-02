const express = require("express");
const User = require("../../db/models/user");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    console.log(`get user api endpoint called by ${req.ip}`);
    const user = await User.find({ userId: req.params.id });
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      data: { err },
    });
  }
});

module.exports = router;
