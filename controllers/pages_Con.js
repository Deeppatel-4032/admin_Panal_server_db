const userProfileCon = async (req, res) => {

    const userName = await req.cookies.userName;
    const userEmail = await req.cookies.userEmail;
    const userContact = await req.cookies.userContact;
    const userImgPath = await req.cookies.userImgPath;
    const userRole = await req.cookies.userRole;

    res.render("pages-profile-user", { userName, userEmail, userContact, userImgPath, userRole });
}

module.exports = { userProfileCon }