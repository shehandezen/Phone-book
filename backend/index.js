// import reuired dependencies
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const expressSession = require("express-session");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
require("dotenv").config();

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
// const auth = require("./routes/oauth/auth");
const requestAuth = require("./routes/authRequest");
const oauth = require("./routes/oauth");

const app = express();

// middlewares
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.set("trust proxy", 1);

app.use(
  cookieSession({
    name: "session",
    keys: ["secret"],
    maxAge: 7 * 24 * 60 * 60 * 1000,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization,  X-PINGOTHER"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
  );
  next();
});

const isLoggedIn = (req, res, next) => {
  console.log(req.session);
  if (req.session.profile) {
    console.log("user logged in.");
    next();
  } else {
    res.status(401).json({
      status: "not authorized",
    });
  }
};

// set port number
const PORT = process.env.PORT || 4000;

// connect server to the database
dbConnect(process.env.MONGODB_URL);

// routes
app.use("/contacts", isLoggedIn, getContacts);
app.use("/contact", isLoggedIn, getContactById);
app.use("/contact", isLoggedIn, upload.single("image"), addContact);
app.use("/contact", isLoggedIn, updateContact);
app.use("/contact", isLoggedIn, deleteContact);
app.use("/user", isLoggedIn, getUser);
app.use("/user", currentUser);
// app.use("/google", auth);
app.use("/google", requestAuth);
app.use("/google", oauth);

// api endpoints
app.use("/", (req, res) => {
  res.status(200).send("<h2>ContactKeep online service</h2>");
});

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
