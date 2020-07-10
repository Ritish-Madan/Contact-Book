// Setup node.js with Express JS on port 8000
const express = require('express'); // Using Express Library
const port = 8000; // Defining port to be used for localhost
const app = express(); // Accessing the express in app variable

// Database Connecting file with mongoose
require('./config/mongoose') // Accessing the file here

// View Engines
app.set("view engine", 'ejs'); // View Engine ejs to be set
app.set("views", __dirname); // Directory where all the view ejs files are located

// Middlewares

app.use(express.urlencoded()); // Middleware to decode the form submission
app.use(express.static("assets")); // To access the css and other styling docs
app.use("/", require("./routes"));
// Deleting the Contact with ID



app.listen(port, function(err){
    if(err){
        console.log("Error Occurred")
    }
    console.log("Great! It worked on port :", port);
});