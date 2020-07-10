const express = require("express");
const routes = express.Router();

destroyController = require("../home_controller/destroy.js");
routes.get("/delete/:id", destroyController.delete);

module.exports = routes;