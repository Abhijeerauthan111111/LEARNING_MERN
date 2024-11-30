const http = require('http')
console.log("I was here");
const requestHandler = (req,res) => {
    console.log("request received", req.url,req.method,req.headers);
    // res.setHeader('Content-Type','text/html');
    // res.write('<!DOCTYPE html>');
    // res.write('<html lang="en">');
    // res.write('<head>');
    // res.write('<title>Document</title>');
    // res.write('</head>');
    // res.write('<body>');
    // res.write('   <h1>Welcome to first server</h1>');
    // res.write('</body>');
    // res.write('</html>');
        res.write(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <title>Document</title>
                    </head>
                    <body>
                        <h1>Welcome to first</h1>
                    </body>
                    </html>
                    `);


        res.end();


    // process.exit();   to exit but not used

}

const server = http.createServer(requestHandler);
const port = 3001;
server.listen(port ,()=>{ console.log(`Server running at : http://localhost:${port}`)

} );
