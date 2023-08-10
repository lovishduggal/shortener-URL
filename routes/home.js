const express = require('express');
const router = express.Router();
const { handleGetHomePage } = require('../controllers/home');

router.get('/', handleGetHomePage);
module.exports = router;
