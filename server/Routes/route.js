const express = require("express");
const register = require("../Controllers/register");
const Route = express.Router();
const login  = require("../Controllers/login");


//API FOR USERS
Route.post("/register",register.register);
Route.post("/login",login.login);
Route.get("/display",register.displayUser);

module.exports = Route;
