const express = require("express");
const router = express.Router();
const con = require("../controller/controller.js");
const regCon = require("../controller/registerCon.js");
const loginCon = require("../controller/loginCon.js");

// defalt path
router.get("/", con.defaultIndexCon)

//registerForm & register path
router.get("/registerFrom", regCon.registerFrom);
router.post("/register", regCon.registerCon);

//loginForm & login path
router.get("/loginForm", loginCon.logInFormCon);
router.post("/login", loginCon.userLoginCon);

//logOut path
router.get("/logOut", loginCon.userLogOutCon);


module.exports = router;
