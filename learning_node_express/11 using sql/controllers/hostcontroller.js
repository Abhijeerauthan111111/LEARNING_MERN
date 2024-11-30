
const Home = require('./../models/home');


exports.getaddhome = (req,res,next)=>{
    
    res.render("host/edit-home",{editing :false , pagetitle:'Add Your Home'})
}

exports.postaddhome = (req,res,next)=>{
    console.log("Host controller",req.body);
    const {housename,price,rating,location,photourl,features,description} = req.body;
    
    const newhome = new Home(housename,price,rating,location,photourl,features,description);
    console.log("error check")
    
    newhome.save().then(([rows])=>{
        res.render("host/home-added",{pagetitle:"Home Added"})
    }).catch(err=>{
        console.log("Error while saving home",err);
        res.redirect("/")
    });
    
    };




exports.gethosthome = (req,res,next)=>{
        Home.fetchall().then (([registeredhomes]) =>{
        
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

        Home.findbyid(homeid).then(([homes]) =>{
            const home = homes[0];
            if(!home){
                console.log("Home not found for editing")
                return res.redirect("/hosthome");
            }
            res.render('host/edit-home',{home: home , editing : editing, pagetitle:'Edit Your Home'})
        }).catch(err=>{console.log("Error while fetching home for editing ",err)})
       
    }    

exports.postedithome = (req,res,next)=>{
    const {id,housename,price,rating,location,photourl,features,description} = req.body;
    const newhome = new Home(housename,price,rating,location,photourl,features,description)
    newhome.id = id;

    newhome.save().then(()=>{
        res.redirect('/host/hosthome')
    }).catch(err=>{
        if(err){
            console.log("error occured while updating house",err);
            res.redirect('/host/hosthome')
            
        }
    })
        

}    

exports.postdeletehome = (req,res,next)=>{
    const homeid = req.params.homeid;
    
    Home.deletebyid(homeid).then((result)=>{
        console.log("Came to delete homeid ", homeid )
        res.redirect('/host/hosthome')
    })
    
  

    
}
