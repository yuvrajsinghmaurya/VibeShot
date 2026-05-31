const bcrypt = require('bcryptjs');

const {
    createUser,
    findUserByEmail,
    findUserByUsername
} = require('../reposistories/user.repository.js')


// function to register the user 

const registerUser = async (userData)=>{
    const {username , email , password , fullName} = userData;

    // find user exist or not 
    const existingEmail = await findUserByEmail(email);

    if(existingEmail){
        throw new Error('Email already exist');
    }

    //  same for username
    const existingUsername = await findUserByUsername(username)

    if(existingUsername){
        throw new Error("username already exists")
    }

    // hash password 
    const hashedPassword = await bcrypt.hash(password , 10)

    // now if eveything is fine and user not exist create the user 

    const user = await createUser({
    username,
    email,
    password_hash: hashedPassword,
    full_name : fullName
});
// this is a imported thing when user register and send the  success message avoid pass to send 
    const {password_hash , ...safeUser} = user
    return safeUser;

}

module.exports = {
    registerUser
}