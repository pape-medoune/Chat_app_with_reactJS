const express = require("express");
const register = require("../Controllers/register");
const Route = express.Router();


//API FOR USERS
Route.post("/register",register.register);
Route.get("/display",register.displayUser);

module.exports = Route;
