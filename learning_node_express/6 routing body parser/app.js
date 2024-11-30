// //core module
// const http = require('http');
const fs = require('fs');

//external module
const express = require('express');
const bodyparser = require('body-parser');

// //local module
// const requestHandler = require('./reqhandler');

// console.log("I was here");
const app = express();

//using body parser in middlware

app.use(bodyparser.urlencoded());

// middleware
app.use((req,res,next)=>{
    console.log('Request Recived',req.url,req.method,req.body);
    next();
})

//second middleware

app.get("/",(req,res,next)=>{                        //get directly matches
    res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Home</title>
            </head>
            <body>
                <h1>Welcome to Home</h1>
                <h1>PLease enter your products</h1>
                <form action="/buy-product" method="POST">
               <input type="text" placeholder="Enter the product you want" name= "products">
               </br>
               <input type="text" placeholder="Enter your budget" name= "budget"> 
               </br>
               <input type="submit" value="send" >
               </form>

            </body>
            </html>
            `);
            
});
app.post("/buy-product",(req,res,next)=>{                              //use matche the starting
    fs.writeFile('buy.json',JSON.stringify(req.body),(err)=>{
        res.statusCode=302;
        res.setHeader('Location','/products');
        res.end();
});
});

app.get("/products",(req,res,next)=>{
    res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Products</title>
            </head>
            <body>
                <h1>Product list appear here</h1>
            </body>
            </html>
            `);
})

app.use((req,res,next)=>{
        res.statusCode=404;
        res.send(    `<!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Page Not Found</title>
            </head>
            <body>
                <h1>404 Page Not Found</h1>
            </body>
            </html>
            `)
        res.end();    
            
});



// const server = http.createServer(app);

const port = 3001;
app.listen(port ,()=>{ console.log(`Server running at : http://localhost:${port}`)

} );
// app.listen(port);
