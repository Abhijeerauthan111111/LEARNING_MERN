
const Home = require('./../models/home');


exports.getaddhome = (req,res,next)=>{
    
    res.render("host/edit-home",{editing :false , pagetitle:'Add Your Home'})
}

exports.postaddhome = (req,res,next)=>{
    console.log("Host controller",req.body);
    const {housename,price,rating,location,photourl,features,description} = req.body;
    
    const newhome = new Home({housename,price,rating,location,photourl,features,description});
    console.log("error check")
    
    newhome.save().then(()=>{
        res.redirect("/host/hosthome")
    }).catch(err=>{
        console.log("Error while saving home",err);
        res.redirect("/")
    });
    
    };




exports.gethosthome = (req,res,next)=>{
        Home.find().then ((registeredhomes) =>{
        
            res.render('host/hosthome',{homes:registeredhomes, pagetitle:'Host Home'})
        });
       
        
    } 

exports.getedithome = (req,res,next)=>{
        const homeid = req.params.homeid;
        const editing = req.query.editing ==="true";
        if(!editing){
            console.log("EDiting flag not set properly")
            return res.redirect("/hosthome")
        }

        Home.findById(homeid).then((home) =>{
        
            if(!home){
                console.log("Home not found for editing")
                return res.redirect("/hosthome");
            }
            res.render('host/edit-home',{home: home , editing : editing, pagetitle:'Edit Your Home'})
        }).catch(err=>{console.log("Error while fetching home for editing ",err)})
       
    }    

exports.postedithome = (req,res,next)=>{
    const {id,housename,price,rating,location,photourl,features,description} = req.body;
    //bussines logic ouside the model, not a good practice


    Home.findById(id).then(existinghome=>{
        if(!existinghome){
            console.log("Home not found for editing");
           return   res.redirect('/host/hosthome')
        }
        existinghome.housename=housename;
        existinghome.price=price;
        existinghome.rating=rating;
        existinghome.location=location;
        existinghome.photourl=photourl;
        existinghome.features=features;
        existinghome.description=description;
        return existinghome.save();

 
    }).finally(()=>  res.redirect('/host/hosthome'))

  
        
  
}    

exports.postdeletehome = (req,res,next)=>{
    const homeid = req.params.homeid;
    
    Home.findByIdAndDelete(homeid).then(()=>{
        console.log("Came to delete homeid ", homeid )
        res.redirect('/host/hosthome')
    })
    
  

    
}