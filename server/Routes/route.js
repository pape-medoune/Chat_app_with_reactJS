const express = require("express");
const register = require("../Controllers/register");
const Route = express.Router();


//API FOR USERSRoute.get("/display",register.displayUser);
Route.post("/register",register.register);


module.exports = Route;
