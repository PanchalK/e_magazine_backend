const mongoose = require("mongoose")

const messageSchema = mongoose.Schema({
    name: String,
    designation: String,
    message: String,
});

const Message = mongoose.model('message', messageSchema);

module.exports = Message;