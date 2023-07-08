const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get(
  "/",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

module.exports = router;
