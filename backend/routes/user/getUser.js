const express = require("express");
const User = require("../../db/models/user");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    console.log(`get user api endpoint called by ${req.ip}`);
    const user = await User.find({ userId: req.params.id });

    if (user.length <= 0) {
      console.log("creating a user...");
      let userData = {
        userId: req.user.id,
        name: req.user.displayName,
        email: req.user.email,
        picture: req.user.picture,
      };
      const user = new User(userData);
      await user.save();
      res.redirect("/google/success");
    } else {
      res.redirect("/google/success");
    }
  } catch (err) {
    res.status(500).json({
      status: "failed",
      data: { err },
    });
  }
});

module.exports = router;
