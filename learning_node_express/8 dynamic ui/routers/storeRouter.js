const express = require('express')
const path = require('path');

// const rootdirectory = require('../util/pathutil');

const {registeredhomes}=require('./hostRouter');

const storeRouter = express.Router();

storeRouter.get('/',(req,res,next)=>{
    console.log(registeredhomes);
    // res.sendFile(path.join(rootdirectory,"/views","index.html"))
    res.render('index',{homes:registeredhomes, pagetitle:'Hamara Airbnb'})
    
})

module.exports = storeRouter;