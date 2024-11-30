const fs = require('fs')
const path = require('path')
const rootdirectory = require ('../util/pathutil.js')
const favouritefilepath = path.join(rootdirectory,'data','favourite.json');
 
const registeredhomes = [];
module.exports = class Favourite{


          
    static fetchall(callback){
        fs.readFile(favouritefilepath,(err,data)=>{
            if(err){
                callback([]);
            }
            else{
                callback( JSON.parse(data));
            }
        })
      
    }
    
    static addtofavourites(homeid,callback){
        Favourite.fetchall(favouriteids=>{
            favouriteids.push(homeid);
       
            fs.writeFile(favouritefilepath,JSON.stringify(favouriteids),callback)
        })
    }
   
}



