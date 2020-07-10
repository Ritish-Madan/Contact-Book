const express = require("express");
const routes = express.Router();

const createController = require("../home_controller/create.js");

routes.post("/add", createController.add);

module.exports = routes;