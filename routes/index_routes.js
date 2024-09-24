const express = require("express");
const router = express.Router();
const con = require("../controllers/controller.js");
const regCon = require("../controllers/registerCon.js");
const loginCon = require("../controllers/loginCon.js");
const pageCon = require("../controllers/pages_Con.js");
const upload = require("../middleware/amin_multer_middleware.js");

// defalt path
router.get("/", con.defaultIndexCon)

//registerForm & register path
router.get("/registerFrom", regCon.registerFrom);
router.post("/register", upload.single("userImgPath"), regCon.registerCon);

//loginForm & login path
router.get("/loginForm", loginCon.logInFormCon);
router.post("/login", loginCon.userLoginCon);

//logOut path
router.get("/logOut", loginCon.userLogOutCon);

//user profile view
router.get("/profile", pageCon.userProfileCon);

module.exports = router;
