// Module Files
const Contact = require("../models/contact.js");

// Controllers
// Creating new Contact controllers
module.exports.create = function(req, res){
    Contact.create(req.body, function(err){
        if(err){
            console.log("Error while creating the contact");
            return;
        };
        console.log("Contact created successfully");
    });
    return res.redirect("back");
};