const express = require('express');
const router = express.Router();
const {
    handleGenerateNewShortURL,
    handleGetVisitHist,
} = require('../controllers/url');

router.get('/analytics/:shortId', handleGetVisitHist);
router.post('/', handleGenerateNewShortURL);

module.exports = router;
