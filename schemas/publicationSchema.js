const mongoose = require("mongoose")

const publicationSchema = mongoose.Schema({
    title: String,
    authors: String,
    publicationdate: Date,
    abstract: String,
    venue: String,
    url: String
});

const Publication = mongoose.model('publication', publicationSchema);

module.exports = Publication;