const express = require("express");
const routes = express.Router();

const homeController = require("../home_controller/index")

// routes.get("/testing", homeController.testing);
routes.get("/", homeController.home);

// Handling addition changes to the contact list
routes.use("/create", require("./create.js"));
routes.use("/destroy", require("./destroy.js"));
module.exports = routes;