const express = require("express");

const router = express.Router();

const { userHelp } = require("../Controller/user.controller");

router.post("/", userHelp);

module.exports = router;
