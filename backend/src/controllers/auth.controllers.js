const { registerUser } = require('../services/auth.service.js');

const register = async (req, res) => {
    try {
        const user = await registerUser(req.body);
        // console.log('req body' , req.body)

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: user
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    register
};