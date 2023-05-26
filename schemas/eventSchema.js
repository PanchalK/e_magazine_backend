const mongoose = require("mongoose")

const eventSchema = mongoose.Schema({
    title: String,
    startdate: Date,
    enddate: Date,
    content: String,
    place: String
});

const Event = mongoose.model('event', eventSchema);

module.exports = Event;