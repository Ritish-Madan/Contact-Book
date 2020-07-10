// File imports
const Contact = require("../models/contact.js");

// Controller Functions Set

// Homepage Controller
module.exports.home = function(req, res){
    Contact.find({}, function(err, contacts){
        if(err){
            console.log("Error accessing the Contacts");
            return;
        }
        console.log("Contact have been updated successfully");
        return res.render("test",{
            title : "Contact Book",
            contact_list : contacts
        });
    });
};