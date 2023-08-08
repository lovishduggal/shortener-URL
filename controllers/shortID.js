const URL = require('../models/url');

async function handleGetUserByShortID(req, res) {
    const shortId = req.params.shortId;
    console.log(shortId);
    try {
        const entry = await URL.findOneAndUpdate(
            { ShortId: shortId },
            { $push: { visitHistory: { timestamp: Date.now() } } },
            { new: true } // To get the updated document
        );

        if (!entry) {
            return res.status(404).send('URL not found');
        }
        console.log(entry);
        res.redirect(entry.urlRedirect);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { handleGetUserByShortID };
