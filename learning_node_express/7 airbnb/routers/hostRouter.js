const express = require('express');
const path = require('path');
const hostrouter = express.Router();
const rootdirectory = require('../util/pathutil');


hostrouter.get('/host/add-home',(req,res,next)=>{
    res.sendFile(path.join(rootdirectory,"/views","add-home.html"))
})



hostrouter.post('/host/add-home',(req,res,next)=>{
console.log(req.body);
res.sendFile(path.join(rootdirectory,"/views","home-added.html"))
})

module.exports = hostrouter;