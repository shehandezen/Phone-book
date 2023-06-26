const express = require("express");
const User = require("../../db/models/user");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log(`add contact api endpoint called by ${req.ip}`);
    let userData = {
        userId: req.user.id,
        name: req.user.displayName,
        email: req.user.email,
        picture: req.user.picture,
    }
    const user = new User(userData);
    await user.save();
    res.status(201).json({
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
