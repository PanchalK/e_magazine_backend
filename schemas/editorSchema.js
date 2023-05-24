const mongoose = require("mongoose")

const editorSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    designation: String,
    post: String,
    program: String,
    image: String
});

const Editor = mongoose.model('editor', editorSchema);

module.exports = Editor;