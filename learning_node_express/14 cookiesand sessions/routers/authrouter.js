const express = require("express")
const authrouter = express.Router();
const authcontroller = require('./../controllers/authcontroller')


authrouter.get("/login", authcontroller.getlogin)
authrouter.post("/login", authcontroller.postlogin)
authrouter.post("/logout", authcontroller.postlogout)


exports.authrouter = authrouter;
