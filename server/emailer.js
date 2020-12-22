const nodemailer = require("nodemailer");
const keys = require("./config/keys");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: keys.emailerEmail, // your email address to send email from
    pass: keys.emailerPassword, // your gmail account password
  },
});

module.exports = transporter;
