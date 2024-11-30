const mongoose = require("mongoose");
const favourite = require("./favourite");

const homeschema = new mongoose.Schema({
  housename: {type:String, required: true}, 
  price : {type:Number, required: true},
   rating:{type:Number, required: true},
    location: {type:String, required: true},
    photourl: {type:String, required: true},
    features: String,
    description: String,
});


homeschema.pre("findOneAndDelete", function(next) {
  
  const homeid = this.getQuery()["_id"];
  console.log( homeid);
  favourite.deleteOne({homeid}).then(()=>{
    console.log("Deleted successfully");
    next();
  }).catch(err=>console.log("Error while deleting",err));


})


module.exports = mongoose.model('Home',homeschema);



