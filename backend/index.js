// import reuired dependencies
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const passport = require("passport");
require("dotenv").config();

const passportConfig = require("./routes/oauth/passportConfig");

const upload = multer({ dest: "uploads/" });

// import db connection
const dbConnect = require("./db/connect");

// import routes
const getContacts = require("./routes/contacts/getContacts");
const getContactById = require("./routes/contacts/getContactById");
const addContact = require("./routes/contacts/addContact");
const updateContact = require("./routes/contacts/updateContact");
const deleteContact = require("./routes/contacts/deleteContact");
const getUser = require("./routes/user/getUser");
const currentUser = require("./routes/user/currentUser");
const auth = require("./routes/oauth/auth");

const app = express();

// middlewares
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
  })
);

// set port number
const PORT = process.env.PORT || 4000;

// connect server to the database
dbConnect(process.env.MONGODB_URL);

// routes
app.use("/contacts", getContacts);
app.use("/contact", getContactById);
app.use("/contact", upload.single("image"), addContact);
app.use("/contact", updateContact);
app.use("/contact", deleteContact);
app.use("/user", getUser);
app.use("/user", currentUser);
app.use("/google", auth);

// api endpoints
app.use("/", (req, res) => {
  res.status(200).send("<h2>ContactKeep online service</h2>");
});

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
