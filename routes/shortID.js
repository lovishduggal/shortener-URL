const express = require('express');
const router = express.Router();
const { handleGetUserByShortID } = require('../controllers/shortID');

router.get('/:shortId', handleGetUserByShortID);
module.exports = router;
