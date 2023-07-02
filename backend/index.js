// import reuired dependencies
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("dotenv").config();

// import db connection
const dbConnect = require("./db/connect");

// authenticate
const passportSetup = require("./routes/oauth/passportSetup");

// import routes
const getContacts = require("./routes/contacts/getContacts");
const getContactById = require("./routes/contacts/getContactById");
const addContact = require("./routes/contacts/addContact");
const updateContact = require("./routes/contacts/updateContact");
const deleteContact = require("./routes/contacts/deleteContact");
const auth = require("./routes/oauth/googleOauth");
const getUserGoogle = require("./routes/user/getUserGoogle");
const getUser = require("./routes/user/getUser");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(
  cookieSession({
    name: "session",
    keys: ["phonebook"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/contact", auth.isLoggedIn);
app.use("/contacts", auth.isLoggedIn);

// set port number
const PORT = process.env.PORT || 4000;

// connect server to the database
dbConnect(process.env.MONGODB_URL);

// routes
app.use("/contacts", getContacts);
app.use("/contact", getContactById);
app.use("/contacts", addContact);
app.use("/contacts", updateContact);
app.use("/contacts", deleteContact);
app.use("/google", auth.router);
app.use("/user", getUser);
app.use("/google/user", getUserGoogle);

// api endpoints
app.use("/", (req, res) => {
  res.status(200).send("<h2>ContactKeep online service</h2>");
});

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
