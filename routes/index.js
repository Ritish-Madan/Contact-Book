const express = require("express");

const routes = express.Router();

console.log("Routes is working fine");

const homeController = require("../home_controller/index")

routes.get("/testing", homeController.testing);
module.exports = routes