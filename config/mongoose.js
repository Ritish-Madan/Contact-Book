// Configuring or accessing MongoDB using Mongoose

const mongoose = require("mongoose"); // Using mongoose package

mongoose.connect('mongodb://localhost:27017/contacts'); // Connecting to MongoDB using mongoose

const db = mongoose.connection; // Connection Request

db.on("error", console.error.bind(console, "Error in establishing database!")); // If error connecting

// When no error found during connection with DB
db.once("open", function () {
    console.log("Database Established successfully!");
});




