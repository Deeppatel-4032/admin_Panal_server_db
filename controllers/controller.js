
const defaultIndexCon = async (req, res) => {
    
    if(req.cookies.userID) {

        const userName = await req.cookies.userName;
        const userEmail = await req.cookies.userEmail;
        const userContact = await req.cookies.userContact;
        const userImgPath = await req.cookies.userImgPath;
        const userRole = await req.cookies.userRole;

        // console.log( "User ID: ", req.cookies.userID );
        // console.log("userName", userName);
    
        res.render("index", { userName, userEmail, userContact, userImgPath, userRole });
    } else {

        res.render("auth-register-basic");
    }
}

module.exports = { defaultIndexCon }