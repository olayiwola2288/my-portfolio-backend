const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
const dotenv = require("dotenv");
dotenv.config()
const nodemailer = require("nodemailer");
const cors = require("cors");
const {userHelp} = require("./Controller/user.controller");

app.use(express.json({limit:"50mb"}));

app.use(cors());

app.use("/help", userHelp)

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5500");
});