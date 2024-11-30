const Favourite = require('../models/favourite');
const Home = require('./../models/home')

exports.gethomes = (req,res,next)=>{
    Home.fetchall().then((registeredhomes) =>{
    
        res.render('store/homes',{homes:registeredhomes, pagetitle:'Hamara Airbnb'})
    });
   
    
} 

exports.getindex = (req,res,next)=>{
    Home.fetchall().then((registeredhomes) =>{
    
        res.render('store/index',{homes:registeredhomes, pagetitle:'Hamara Airbnb'})
    });
}

exports.gethomedetails = (req,res,next)=>{
   
    const homeid = req.params.homeid;
    Home.findbyid(homeid).then((home) => {
       
        if(!home){
         console.log("Home not found");
         return res.redirect("/homes");
        }
        res.render('store/homedetails',{home:home ,pagetitle:'Home Details'})
        
    })
    
}

exports.postfavourite =(req,res,next)=>{
const homeid = req.body.id;
const fav = new Favourite(homeid);
fav.save().then(()=>{
    res.redirect('/favourites') 

}).catch((err)=>{
    console.log("Erro while adding to fav ",err);
     res.redirect('/favourites')    
})
}
    



exports.getfavourite = (req,res,next)=>{
    Favourite.fetchall().then(favouriteids=>{
        Home.fetchall().then((registeredhomes) =>{
        favouriteids = favouriteids.map(favid=>favid.homeid);

        console.log(favouriteids,registeredhomes)
        const favouritehome = registeredhomes.filter(home=>favouriteids.includes(home._id.toString()))
        res.render('store/favourites',{homes:favouritehome, pagetitle:'favourites'})
        });
    })

     
}

exports.postdeletefavourite = (req,res,next)=>{
    const homeid = req.params.homeid;
    Favourite.deletebyid(homeid).then(()=>{
        console.log("Home deleted from favoutite " , homeid);
        res.redirect("/favourites")
    }
       
    ).catch(err=>{
        if(err){
          console.log("Error occured while deleting from favourite " , err)
          res.redirect("/favourites")
        }
        
    })

}

