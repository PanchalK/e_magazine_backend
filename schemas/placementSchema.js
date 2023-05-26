const mongoose = require("mongoose")

const placementSchema = mongoose.Schema({
    year: Number,
    link: String
});

const Placement = mongoose.model('placementrecord', placementSchema);

module.exports = Placement;