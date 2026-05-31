const {body , validationResult} = require('express-validator')

const registerValidation = [
    body('username')
        .trim()
        .notEmpty()
        .withMessage('Username is required'),
    
    body('email')
        .trim()
        .isEmail()
        .withMessage(" valid email is required"),

    body('password')
        .isLength({min : 6})
        .withMessage("password must be at least 6 charactors"),
    body('fullName')
        .optional()
        .isString()
        .withMessage("Full name be a string")


];

const validate = (req , res , next )=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
         return res.status(400).json({
        success : false,
        errors : errors.array()
    })
    }

    next();
}




//  now validation for login 
const loginValidation = [
    body('email')
        .isEmail()
        .withMessage('Valid email is required'),

    body('password')
        .notEmpty()
        .withMessage('Password is required')
];

module.exports={
    registerValidation,
    loginValidation,
    validate
}