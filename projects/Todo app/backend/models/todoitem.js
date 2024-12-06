const mongoose = require("mongoose")

const todoitemschema = new mongoose.Schema({
 task :{type: String , required : true},
 date :{type: Date , required : true},
 completed :{type: Boolean , default : false},
 createdate :{type: Date , default : Date.now}

})

module.exports = mongoose.model("Todoitem",todoitemschema)