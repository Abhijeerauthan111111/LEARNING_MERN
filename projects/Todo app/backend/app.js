const ENV = process.env.NODE_ENV || "production";
require("dotenv").config(
    {
        path : `.env.${ENV}`
    });

//importing external module
const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require("mongoose");
const cors = require("cors");
 
// importing local module
const errorcontroller = require('./controllers/errorcontroller');
const itemrouter = require("./routers/itemrouter");


const MONGO_DB_URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@airbnb.wtoi7.mongodb.net/${process.env.MONGO_DB_DATABASE}`;
const app = express(); 

//routers
app.use(bodyparser.urlencoded({extended:true}));   //using body parser in middlware
app.use(cors())
app.use(express.json())
app.use(itemrouter);

app.use(errorcontroller.get404);

// setting up port
const port = process.env.PORT || 3000;
mongoose.connect(MONGO_DB_URL).then(()=>{
    app.listen(port ,()=>{ console.log(`Server running at : http://localhost:${port}`)

    })
})


   