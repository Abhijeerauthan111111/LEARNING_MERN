const fs = require('fs')
const path = require('path')
const rootdirectory = require ('./../util/pathutil.js')
const homefilepath = path.join(rootdirectory,'data','homes.json');
 
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

    
save(callback){
        console.log("error check")
        this.id=Math.random().toString();
        Home.fetchall(registeredhomes=>{
            registeredhomes.push(this);
       
            fs.writeFile(homefilepath,JSON.stringify(registeredhomes),callback)
        });

    }


        
    static fetchall(callback){
        fs.readFile(homefilepath,(err,data)=>{
            if(err){
                callback([]);
            }
            else{
                callback( JSON.parse(data));
            }
        })
        // return registeredhomes;
    }
    
    
    static findbyid(homeid,callback){
        Home.fetchall(homes=>{
           const home =  homes.find(home=>home.id===homeid);
            callback(home);
        })

    }

}



