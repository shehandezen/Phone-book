const express = require("express");
const passport = require("passport");

const router = express.Router();

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

router.get("/success", isLoggedIn, (req, res) => {
  res.status(200).json({
    status: "success",
    data: req.user,
  });
});

router.get("/fail", (req, res) => {
  res.status(401).json({
    status: "not authorized",
    data: req.user,
  });
});

router.get(
  "/auth",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/fail" }),
  (req, res) => {
    console.log("google callback url");
    res.redirect(`/google/user/${req.user.id}`);
  }
);

router.get("/logout", (req, res, next) => {
  if (req.user) {
    req.logout();
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});

module.exports = { router, isLoggedIn };
