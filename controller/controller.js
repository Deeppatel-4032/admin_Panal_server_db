
const defaultIndexCon = (req, res) => {
    
    if(req.cookies.userID) {
        res.render("index.ejs");
    } else {

        res.render("auth-register-basic.ejs");
    }
}

module.exports = { defaultIndexCon }