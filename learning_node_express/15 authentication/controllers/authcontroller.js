const {check, validationResult} = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");



exports.getlogin = (req,res,next)=>{
   res.render('auth/login', {pagetitle:"Login", isLoggedIn : false,path: req.path,
      })
}

exports.postlogin = async (req,res,next)=>{
   const {email,password}=req.body;
   console.log(email,password);


   try{
      const user = await User.findOne({email});
         if(!user){
            throw new Error("User Not Found");
            
         }

      const ismatch = await bcrypt.compare(password,user.password)
         if(!ismatch){
            throw new Error("Password Does Not Match");
         
         }  
       
      req.session.isLoggedIn = true; 
      req.session.user = user;  
      await req.session.save();

      res.redirect('/');
   }


   catch(err){
      res.render('auth/login', {
         pagetitle:"Login", 
         isLoggedIn : false,
         path: req.path,
         errormessages: [err.message]
      })
   }
    
} 



exports.postlogout = (req,res,next)=>{
     
   req.session.destroy();
      
      res.redirect('/login')
   }  

exports.getsignup=(req,res,next)=>{
    res.render('auth/signup',{pagetitle:"Signup", isLoggedIn:false,path: req.path})
}   




//first name validator
const firstnamevalidator = 
check('firstname')
   .notEmpty()
   .withMessage("first name is mandatory")
   .trim()
   .isLength({min:2})
   .withMessage("First name should be minimum two chars")
   .matches(/^[a-zA-Z/s]+$/)
   .withMessage("First name should only containe English alphabets");

 //last name validator
const lastnamevalidator = 
check('lastname')
   .notEmpty()
   .withMessage("Last name is mandatory")
   .trim()
   .isLength({min:2})
   .withMessage("Last name should be minimum two chars")
   .matches(/^[a-zA-Z/s]+$/)
   .withMessage("Last name should only containe English alphabets");  

 //Email validator
 const emailvalidator = 
 check('email')
    .isEmail()
    .withMessage("Please Enter a valid email")
    .normalizeEmail();
    
//password validator

const passwordvalidator = 
 check('password')
    .isLength({min:8})
    .withMessage("Password must be at least 8 char long")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password must contain atleast one special character ! @ # $ %...")
    .trim();

//confirmpassword validator

const confirmpasswordvalidator = 
 check('confirmpassword')
    .trim()
    .custom((value, {req})=>{
        if(value !== req.body.password){
          throw new Error("Password do not match");
          
        }
        return true;
    });    


// userType validator

const userTypevalidator = 
check('userType')
.notEmpty()
.withMessage("User type cannot be empty")
.isIn(['guest', 'host'])
.withMessage("Invalid user type")


// terms validator

const termvalidator =
check("terms")
.notEmpty()
.withMessage("Terms and condition must be accepted ")

exports.postsignup = [
   firstnamevalidator,
   lastnamevalidator,
   emailvalidator,
   passwordvalidator,
   confirmpasswordvalidator,
   userTypevalidator,
   termvalidator,
   (req,res,next)=>{
     
   console.log("User came for signup",req.body)
   const errors = validationResult(req);
   if(!errors.isEmpty()){
    
      return res.status(422).render('auth/signup',{
         pagetitle:"Signup", 
         isLoggedIn:false,
         path: req.path,
         errormessages: errors.array().map(err=>err.msg),
         oldinput: req.body,
      })
   }
   const {firstname,lastname,email,password,userType} = req.body;

         bcrypt.hash(password,12).then(hashpassword=>{
               console.log(hashpassword);
               const user = new User({firstname,lastname,email,password : hashpassword,userType})
               user.save().then(()=> res.redirect('/login')).catch(err=>{
                  return res.status(422).render('auth/signup',{
                     pagetitle:"Signup", 
                     isLoggedIn:false,
                     path: req.path,
                     errormessages: [err],
                     oldinput: req.body,
                  })
               })

         })
    
  
   }  
];