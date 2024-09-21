
const defaultIndexCon = (req, res) => {
    
    if(req.cookies.userID) {
        res.render("index.ejs");
    } else {

        res.render("auth-login-basic.ejs");
    }
}

module.exports = { defaultIndexCon }