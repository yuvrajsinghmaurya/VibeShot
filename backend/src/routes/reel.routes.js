const authenticate = require('../middlewares/auth.middleware');
const { getAllReels, createReel } = require('../controllers/reel.controller')

const express = require('express')

const router = express.Router();

router.post('/' , authenticate , createReel);
router.get('/' , getAllReels);

module.exports = router