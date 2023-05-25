const mongoose = require("mongoose")

const placementSchema = mongoose.Schema({
    year: Number,
    link: String
});

const Placement = mongoose.model('placementrecords', placementSchema);

module.exports = Placement;