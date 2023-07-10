const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  id: String,
  userId: String,
  thumbnail: String,
  prefix: String,
  fullName: {
    type: String,
    required: true,
  },
  jobTitle: String,
  phoneNumbers: [
    {
      label: String,
      phoneNumber: String,
    },
  ],
  email: [
    {
      label: String,
      email: String,
    },
  ],
  postalAddress: {
    label: String,
    address: String,
    city: String,
    state: String,
    postCode: String,
    country: String,
  },
  date: String,
  socialMedia: [
    {
      label: String,
      username: String,
    },
  ],
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
