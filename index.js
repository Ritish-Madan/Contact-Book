const express = require('express'); // Using Express Library
const port = 8000; // Defining port to be used for localhost
require('./config/mongoose') // Accessing the file here
const Contact = require('./models/contact.js'); // Giving the Schema to Contacts variable
const app = express(); // Accessing the express in app variable

app.set("view engine", 'ejs'); // View Engine ejs to be set
app.set("views", __dirname); // Directory where all the view ejs files are located
app.use(express.urlencoded()); // Middleware to decode the form submission
app.use(express.static("assets")); // To access the css and other styling docs
app.use("/", require("./routes"));


// Home Page where the front end is displayed
app.get("/", function(req, res){ // Home route (Front-End views)
    Contact.find({}, function(err, contacts){
        if(err){
            console.log("Error while creating the contact variable for ejs");
            return;
        }
        console.log('Contact variable for ejs updated successfully!')
        return res.render("test",{ // We render the view engine when there is no error occured
            title : "Contact List", // View engine varibale assigning
            contact_list : contacts // Giving the database response to ejs
        });
    });
});


// Creating the new contact
app.post("/create", function(req, res){
    Contact.create(req.body, function(err,newContact){ // we are giving the req.body to the DB as per schema
        if(err){
            console.log("Error While creating the contact: ", err);
        }
        console.log("Success!!", newContact);
    })
    return res.redirect("/") // Once added the data we direct back to homepage
});


// Deleting the Contact with ID

app.get("/delete/:id", function(req, res){
    console.log(req.params.id);
    conatctId = req.params.id;
    Contact.findByIdAndDelete(conatctId, function(err){
        console.log("Error occured while deleting a contact");
        return;
    });
    return res.redirect("back");
})

app.listen(port, function(err){
    if(err){
        console.log("Error Occurred")
    }
    console.log("Great! It worked on port :", port);
});