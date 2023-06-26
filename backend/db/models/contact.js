const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  id: String,
  userId: String,
  fullName: {
    type: String,
    required: true,
  },
  jobTitle: String,
  phoneNumbers: [
    {
      label: String,
      number: {
        type: String,
        required: true,
      },
    },
  ],
  emailAddresses: [
    {
      label: String,
      email: String,
    },
  ],
  thumbnail: String,
  postalAddresses: [
    {
      label: String,
      address: String,
      city: String,
      region: String,
      state: String,
      postCode: String,
      country: String,
    },
  ],
  prefix: String,

  birthday: { year: Number, month: Number, day: Number },
  imAddresses: [{ username: String, service: String }],
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
