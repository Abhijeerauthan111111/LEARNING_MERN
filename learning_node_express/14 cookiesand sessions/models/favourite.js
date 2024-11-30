const mongoose = require("mongoose");


const favouriteschema = new mongoose.Schema({
    homeid: { type: mongoose.Schema.Types.ObjectId, ref: 'Home', unique:true, required:true }
});


module.exports = mongoose.model('favourite',favouriteschema);

