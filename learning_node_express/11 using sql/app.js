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
const airbnbdb = require('./util/database');

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





//setting up port
// const port = 3001;
// app.listen(port ,()=>{ console.log(`Server running at : http://localhost:${port}`)

// } );

// Step 1: Get the port number 
const port = process.env.PORT || 3001;

// Step 2: Replace your existing app.listen with this
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at:`);
    console.log(`- Local: http://localhost:${port}`);
    console.log(`- Network: http://${getLocalIp()}:${port}`);
});

// Step 3: Add this helper function to get your local IP
function getLocalIp() {
    const { networkInterfaces } = require('os');
    const nets = networkInterfaces();
    
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
            if (net.family === 'IPv4' && !net.internal) {
                return net.address;
            }
        }
    }
    return '0.0.0.0';
}
