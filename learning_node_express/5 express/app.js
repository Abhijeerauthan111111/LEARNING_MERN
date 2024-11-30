// //core module
// const http = require('http');

//external module
const express = require('express');

//local module
const requestHandler = require('./reqhandler');

// console.log("I was here");
const app = express();

//first middleware
app.use("/",(req,res,next)=>{
    console.log('first middleweare',req.url,req.method);
    next();
})
//second middleware

app.get("/test",(req,res,next)=>{                        //get directly matches
    console.log('second middleweare',req.url,req.method);
    res.send("<p>Welcome brother</p>")
});
app.use("/",(req,res,next)=>{                              //use matche the starting
    console.log('second middleweare',req.url,req.method);
    res.send("<p>Welcome sister</p>")
});




// const server = http.createServer(app);

const port = 3001;
app.listen(port ,()=>{ console.log(`Server running at : http://localhost:${port}`)

} );
// app.listen(port);
