const express = require('express');
const router = express.Router();

const {login,signup} = require('./../controllers/UserAuth');

//Login Route
router.post('/login',login)
//Signup Route
router.post('/signup',signup)

module.exports = router