const {register, login} = require('../controllers/auth.controllers.js')

const express = require('express');
const { registerValidation, validate , loginValidation } = require('../validations/auth.validation.js');

const router = express.Router();

router.post('/register' , registerValidation,validate ,register )


router.post('/login' , loginValidation , validate , login)


module.exports = router;