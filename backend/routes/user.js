const express = require("express");
const route = express.Router();
const { loginuser, signupuser } = require("../controllers/userController.js");

route.post("/login", loginuser);
route.post("/signup", signupuser);

module.exports = route;
