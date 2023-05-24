const mongoose = require("mongoose")

const articleSchema = mongoose.Schema({
    name: String,
    email: String,
    program: String,
    semester: Number,
    title: String,
    summary: String,
    article: String,
    image: String,
    approved: Boolean
});

const Article = mongoose.model('article', articleSchema);

module.exports = Article;