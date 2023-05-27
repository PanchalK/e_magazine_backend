const mongoose = require("mongoose")

const magazineSchema = mongoose.Schema({
    magazinecode: String,
    title: String,
    releasedate: Date,
    coverimg: String,
    link: String,
    approved: Boolean
});

const Magazine = mongoose.model('magazine', magazineSchema);

module.exports = Magazine;