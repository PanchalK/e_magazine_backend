const mongoose = require("mongoose")

const magazineSchema = mongoose.Schema({
    magazinecode: String,
    title: String,
    releasedate: {day: Number, month: String, year: Number},
    coverimg: String,
    link: String,
    approved: Boolean
});

const Magazine = mongoose.model('magazine', magazineSchema);

module.exports = Magazine;