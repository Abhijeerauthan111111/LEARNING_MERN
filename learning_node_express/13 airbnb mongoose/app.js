// //core module
const fs = require('fs');
const path = require('path');

//importing external module
const express = require('express');
const bodyparser = require('body-parser');

// importing local module

const storeRouter = require('./routers/storeRouter');
const {hostrouter} = require('./routers/hostRouter');
// const router404 = require('./routers/router404');
const rootdirectory = require('./util/pathutil');
const errorcontroller = require('./controllers/errorcontroller');


//setting up ejs
const app = express();
app.set('view engine','ejs');
app.set('views','views');


//serving static files
app.use(express.static(path.join(rootdirectory,"public")))
//using body parser in middlware
app.use(bodyparser.urlencoded({extended:true}));

//using routers
app.use(storeRouter);
app.use(hostrouter);
// app.get(router404);

//handling 404 error
app.use(errorcontroller.get404);


const mongoose = require("mongoose")


// setting up port
const port = 3001;
const MONGO_DB_URL = "  ";  //add your mongo db url
mongoose.connect(MONGO_DB_URL).then(()=>{
    console.log("Connected to mongo db")
    app.listen(port ,()=>{ console.log(`Server running at : http://localhost:${port}`)});

    } ).catch(err=>{
        console.log("Error while connecting to MONGODB ",err)
    });
    



