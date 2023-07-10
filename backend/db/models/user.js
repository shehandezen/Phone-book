const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: String,
  userId: String,
  fullName: {
    type: String,
    required: true,
  },
  email: String,
  picture: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
