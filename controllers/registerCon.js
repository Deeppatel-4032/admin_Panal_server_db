const user_Model = require("../models/user_model");
const bcrypt = require("bcrypt");
const saltRounds = 10;  


const registerFrom = (req, res) => {
    res.render("auth-register-basic")
}

const registerCon = async (req, res) => {

    console.log(req.body);

    if(req.body.password === req.body.com_pass) {
        
        bcrypt.hash(req.body.password, saltRounds, async (err, hashPassword) => {

            const user = new user_Model({
                userName : req.body.userName,
                email : req.body.email,
                Contact : req.body.Contact,
                role : req.body.role,
                path : req.file.path,
                password : hashPassword
            })
            console.log("register user",user);
            

            try {
                const createdUser = await user.save();
                console.log("user", createdUser);
                
            } catch (error) {
                res.redirect("/loginForm");
            }
        })
    } else {
        res.redirect("/registerFrom");
    }
    
}
module.exports = { registerFrom, registerCon }

