const express = require('express')
const path = require('path');
const rootdirectory = require('../util/pathutil');

const storeRouter = express.Router();

storeRouter.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootdirectory,"/views","index.html"))
})

module.exports = storeRouter;