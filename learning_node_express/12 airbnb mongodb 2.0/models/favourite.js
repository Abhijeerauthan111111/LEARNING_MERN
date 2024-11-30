const { ObjectId } = require('mongodb');
const { getdb } = require('../util/database.js');
 
const registeredhomes = [];
module.exports = class Favourite{
   
    constructor(homeid){
      this.homeid = homeid;
    }
 

    save() { // this save also helps to edit the house
      const db = getdb();

     return db.collection("favourites").findOne({ homeid: this.homeid }).then(existingfav => {
        if (!existingfav) {
          return db.collection("favourites").insertOne(this);
        }
        console.log("Already added to favourite");
        return Promise.resolve();
      });
    }
          
    static fetchall(){
        const db = getdb();

        return db.collection("favourites").find().toArray();
      
    }
    
   
   
    static deletebyid(homeid){
        const db = getdb();
        return db.collection("favourites").deleteOne({homeid:homeid})
 
    }

    

}



