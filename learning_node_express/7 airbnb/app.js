// //core module
const fs = require('fs');
const path = require('path');

//external module
const express = require('express');
const bodyparser = require('body-parser');

// //local module
const storeRouter = require('./routers/storeRouter');
const hostrouter = require('./routers/hostRouter');
const router404 = require('./routers/router404');
const rootdirectory = require('./util/pathutil');


const app = express();


app.use(express.static(path.join(rootdirectory,"public")))
//using body parser in middlware
app.use(bodyparser.urlencoded({extended:true}));

app.use(storeRouter);
app.use(hostrouter);
// app.get(router404);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootdirectory, 'views', 'router404.html')); // Example: serving a 404 page
});




const port = 3001;
app.listen(port ,()=>{ console.log(`Server running at : http://localhost:${port}`)

} );
