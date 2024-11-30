const express = require('express');
// const path = require('path');
const hostrouter = express.Router();
// const rootdirectory = require('../util/pathutil');
const hostcontroller = require('./../controllers/hostcontroller')

hostrouter.get("/add-home",hostcontroller.getaddhome);
hostrouter.post("/host/add-home",hostcontroller.postaddhome);

hostrouter.get("/edit-home/:homeid",hostcontroller.getaddhome);
hostrouter.get('/hosthome',hostcontroller.gethosthome);


exports.hostrouter = hostrouter;
