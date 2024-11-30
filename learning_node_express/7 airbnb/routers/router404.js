const express = require ('express');
const path = require('path');
const router404 = express.Router();
const rootdirectory = require('../util/pathutil');

router404.use((req,res,next)=>{
    res.statusCode=404;
    res.sendFile(path.join(rootdirectory,"/views","router404.html"))
    res.end();    
        
});

module.exports = router404;