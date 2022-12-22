import userService from '../service/userServices';
const handleHelloWorld = (req, res) => {
    return res.render("home.ejs");
}

const handleUserPage = async (req, res) => {

    let userList = await userService.getUserList();
    console.log(">>>check user list :", userList);
    return res.render("user.ejs", { userList });
}

const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;



    // userService.createNewUser(email, password, username);

    return res.send("handleCreateNewUser");
}



module.exports = {
    handleHelloWorld, handleUserPage,
    handleCreateNewUser,
}