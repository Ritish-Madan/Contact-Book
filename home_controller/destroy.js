// Module Files
const Contact = require("../models/contact.js");

// Controllers
// Deleting a contact
module.exports.delete = function(req, res){
    console.log(req.params.id);
    conatctId = req.params.id;
    Contact.findByIdAndDelete(conatctId, function(err){
        if(err){
            console.log("Error occured while deleting a contact");
            return;
        };
    });
    return res.redirect("back");
};