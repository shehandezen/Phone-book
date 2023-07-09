const express = require("express");
const { OAuth2Client } = require("google-auth-library");
require("dotenv").config();

const router = express.Router();

router.post("/request", (req, res) => {
  //   res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  //   res.header("Referrer-Policy", "no-referrer-when-downgrade");

  const redirectUrl = process.env.GOOGLE_CALLBACK_URL;
  const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    redirectUrl
  );

  const authorizeUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile openid",
      "https://www.googleapis.com/auth/userinfo.email openid",
    ],
    prompt: "consent",
  });

  res.json({
    url: authorizeUrl,
  });
});

module.exports = router;
