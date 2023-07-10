const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log(`get user api endpoint called by ${req.ip}`);
    console.log(req.user);
    user = req.user;
    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      data: { err },
    });
  }
});

module.exports = router;
