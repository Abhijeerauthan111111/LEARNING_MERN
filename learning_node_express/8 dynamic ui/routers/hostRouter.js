const express = require('express');
const path = require('path');
const hostrouter = express.Router();
const rootdirectory = require('../util/pathutil');


hostrouter.get('/host/add-home',(req,res,next)=>{
    // res.sendFile(path.join(rootdirectory,"/views","add-home.html"))
    res.render('add-home',{pagetitle:'Add Your Home'})
})

const registeredhomes = [];


hostrouter.post('/host/add-home',(req,res,next)=>{
registeredhomes.push(req.body);
console.log(registeredhomes);
// res.sendFile(path.join(rootdirectory,"/views","home-added.html"))
res.render('home-added',{pagetitle:'Home Added'})
})

exports.hostrouter = hostrouter;
exports.registeredhomes = registeredhomes;