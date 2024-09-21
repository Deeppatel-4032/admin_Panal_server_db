const user_Model = require("../models/user_model.js");
const bcrypt = require("bcrypt");

const logInFormCon = (req, res) => {
    res.render("auth-login-basic")
}

const userLoginCon = async (req, res) => {
    console.log(req.body);

    const userLogin = await user_Model.find({email : req.body.email});

    console.log("userLogin",  userLogin);

    if(userLogin){

        bcrypt.compare(req.body.password, userLogin[0].password, (err, result) => {

            if(result){
                res.cookie("userID", userLogin[0]._id.toString())
                res.redirect("/")
            } else {
                res.redirect("/loginForm")
            }
        })
    } else {

        res.redirect("/register")
    }
}

const userLogOutCon = (req, res) => {
    res.clearCookie("userID")
    res.redirect("/loginForm")
}


module.exports = { logInFormCon, userLoginCon, userLogOutCon }