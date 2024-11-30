const mongodb = require("mongodb");

const mongoclient = mongodb.MongoClient;

const url = "   "; // add your mongodb url

let _db;

const mongoconnect =(callback)=>{
mongoclient.connect(url).then((client)=>{
 console.log(client);
 _db = client.db('airbnbapp')
 callback();
}).catch(err=>console.log("Error came while connecting to mongo db : ",err))
}

const getdb=()=>{
   if(!_db){
     throw new Error("Could not connect to mongodb")
   }
   return _db;
}

exports.mongoconnect = mongoconnect;
exports.getdb = getdb;