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



//setting up port
const port = 3001;
app.listen(port ,()=>{ console.log(`Server running at : http://localhost:${port}`)

} );
