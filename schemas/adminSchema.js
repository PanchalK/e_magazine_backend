const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    designation: String
});

const Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;