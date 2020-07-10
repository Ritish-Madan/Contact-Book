const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    }
});

const Contact = mongoose.model("ContactList", contactSchema);

module.exports = Contact;