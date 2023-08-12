const express = require('express');
const router = express.Router();
const {
    handleGetHomePage,
    handleGetSignUpPage,
    handleGetLoginPage
} = require('../controllers/home');

router.get('/', handleGetHomePage);
router.get('/signup', handleGetSignUpPage);
router.get('/login', handleGetLoginPage);
module.exports = router;
