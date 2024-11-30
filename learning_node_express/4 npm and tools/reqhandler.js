const fs = require('fs');
const {URLSearchParams}=require('url');

const reqhandler = (req,res) => {
    console.log("request received", req.url,req.method);
    if(req.url==="/"){
        res.write(`<!DOCTYPE html>
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
            res.end();
    }

    else if (req.url==="/products"){
        res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Products</title>
            </head>
            <body>
                <h1>Product list appear here</h1>
            </body>
            </html>
            `);
            res.end();
    }
    else if(req.url==="/buy-product"){
        console.log("Form data recived");
        const buffer = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            buffer.push(chunk);
        })
        req.on('end',()=>{
            const body = Buffer.concat(buffer).toString();
            // console.log(body);
            const params = new URLSearchParams(body);
            //[["prodcts","jeans"],["price","999"]]

            const jsonObject = {};
            for(const [key,value] of params.entries()){
                jsonObject[key]=value;
            }
            console.log(jsonObject);
            fs.writeFile('buy.json',JSON.stringify(jsonObject),(err)=>{
                res.statusCode=302;
                res.setHeader('Location','/products');
                res.end();
                console.log("Sending Response");
            })
           
 
        })
        
        

    }
    else {
        res.statusCode=404;
        res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Page Not Found</title>
            </head>
            <body>
                <h1>404 Page Not Found</h1>
            </body>
            </html>
            `);
            res.end();
    }
        
    


    // process.exit();   to exit but not used


}
module.exports = reqhandler;