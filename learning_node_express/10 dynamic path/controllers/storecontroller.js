const Favourite = require('../models/favourite');
const Home = require('./../models/home')

exports.gethomes = (req,res,next)=>{
    Home.fetchall(registeredhomes =>{
    
        res.render('store/homes',{homes:registeredhomes, pagetitle:'Hamara Airbnb'})
    });
   
    
} 

exports.getindex = (req,res,next)=>{
    Home.fetchall(registeredhomes =>{
    
        res.render('store/index',{homes:registeredhomes, pagetitle:'Hamara Airbnb'})
    });
}

exports.gethomedetails = (req,res,next)=>{
   
    const homeid = req.params.homeid;
    Home.findbyid(homeid, home=>{
        if(!home){
          console.log("Home not found");
          return res.redirect("/homes");
        }
        console.log("Came to detail page od id : ",homeid,home)
        res.render('store/homedetails',{ home:home , pagetitle:'Home Details'})
        
    })
    
}

exports.postfavourite =(req,res,next)=>{
const homeid = req.body.id;
console.log("added to favourite",homeid)
Favourite.addtofavourites(homeid,err=>{
    if(err){
      console.log("ERrro while adding to fav ",err)
    }
    res.redirect('/favourites')
})
    
    

}

exports.getfavourite = (req,res,next)=>{
    Favourite.fetchall(favouriteids=>{
        Home.fetchall(registeredhomes =>{
        const favouritehome = registeredhomes.filter(home=>favouriteids.includes(home.id))
        res.render('store/favourites',{homes:favouritehome, pagetitle:'favourites'})
        });
    })

    
}

exports.postdeletefavourite = (req,res,next)=>{
    const homeid = req.params.homeid;
    Favourite.deletebyid(homeid, err=>{
        if(err){
          console.log("Error occured while deleting from favourite " , err)
        }
        console.log("Home deleted from favoutite " , homeid);
        res.redirect("/favourites")
    })

}