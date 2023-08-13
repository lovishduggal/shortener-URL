const URL = require('../models/url');
const shortid = require('shortid');
async function handleGenerateNewShortURL(req, res) {
    const url = req.body.url;
    const entry = await URL.findOne({
        urlRedirect: url,
    });
    if (entry) {
        return res.render('home', {
            shortId: entry.ShortId,
        });
    }
    const shortID = shortid(8);
    await URL.create({
        ShortId: shortID,
        urlRedirect: url,
        visitHistory: [],
        createdBy: req.user._id,
    });
    return res.render('home', {
        shortId: shortID,
    });
}

async function handleGetVisitHist(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ ShortId: shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

module.exports = { handleGenerateNewShortURL, handleGetVisitHist };
