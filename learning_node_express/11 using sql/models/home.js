const fs = require('fs')
const path = require('path')
const rootdirectory = require ('./../util/pathutil.js');
const Favourite = require('./favourite.js');
const homefilepath = path.join(rootdirectory,'data','homes.json');
const airbnbdb = require("./../util/database");
 
const registeredhomes = [];

module.exports = class Home{
    constructor(housename,price,rating,location,photourl,features,description){
        this.housename = housename;
        this.price = price;
        this.location = location;
        this.description = description;
        this.rating = rating;
        this.photourl = photourl;
        this.features = features;


    }



    save(){   //this save also help to edit the house 

      if(this.id){
         console.log("Editing done")
         return airbnbdb.execute('UPDATE homes SET housename = ?,price = ?,rating = ?,location = ?,photourl = ?,features = ?,description = ? WHERE id = ?',[this.housename,this.price,this.rating,this.location,this.photourl,this.features,this.description,this.id])
      }
      else {
        return airbnbdb.execute('INSERT INTO homes(housename,price,rating,location,photourl,features,description) VALUES(?,?,?,?,?,?,?)',[this.housename,this.price,this.rating,this.location,this.photourl,this.features,this.description])
      }
    }


        
    static fetchall(){
       return airbnbdb.execute("SELECT * FROM homes");
    }
    
    
    static findbyid(homeid){
      return airbnbdb.execute("SELECT * FROM homes WHERE id = ?",[homeid])

    }

    static deletebyid(homeid){
      return airbnbdb.execute("DELETE FROM homes WHERE id = ?",[homeid]);

    }
    


}





