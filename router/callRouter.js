const express = require("express");
const { callHandler } = require("../controller/callController");
const callRouter = express.Router();

callRouter.post("/connect", callHandler);
module.exports = callRouter