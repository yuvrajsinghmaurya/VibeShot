const prisma = require('../config/prisma.js')

// function for create user 
const createUser= async(userData)=>{
    const user = await prisma.user.create({
        data:userData

    })
    return user;

};

// function for check user is exist or not 
const findUserByEmail = async(email)=>{
    const user = await prisma.user.findUnique({
        where :{
            email : email
        }
    })
    return user ;
};

//  function find user by username 

const findUserByUsername = async (username)=>{
    const user = await prisma.user.findUnique({
        where : {
            username : username
        }
    })
    return user;
};


module.exports= {
    createUser,
    findUserByEmail,
    findUserByUsername


};