const express = require("express");
const User = require("../../db/models/user");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    console.log(`get user api endpoint called by ${req.ip}`);
    const user = await User.find({ userId: req.params.id });
    if (user.length <= 0) {
      try {
        console.log(`add contact api endpoint called by ${req.ip}`);
        let userData = {
          userId: req.user.id,
          fullName: req.user.displayName,
          emailAddresses: [{ label: "Registerd", email: req.user.email }],
          thumbnail: req.user.picture,
        };
        const user = new User(userData);
        await user.save();
        res.redirect("/google/success");
      } catch (err) {
        res.status(500).json({
          status: "failed",
          data: { err },
        });
      }
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
