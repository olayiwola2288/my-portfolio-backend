// let userModel = require('../Model/user.model');

const nodemailer = require('nodemailer');

const userHelp = (req, res) => {
    console.log(req.body);

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASS,
      },
    });
    let mailOptions = {
      from: req.body.email,
      to: "olayiwolasalaudeen@gmail.com",
      subject: `${req.body.fullName}`,
      text: `${req.body.message}`,
    };
    transporter.sendMail(mailOptions)
    .then((info) => {
        res.send("mail sent successfully")
        console.log(info);
      })
      .catch((err) => {
        res.send("error sending mail")
        console.log(err);
      })
}

module.exports = { userHelp };
