const URL = require('../models/url');
async function handleGetHomePage(req, res) {
    if (!req.user) return res.redirect('/login');
    const id = req.user._id;
    const allUrls = await URL.find({ createdBy: id });
    return res.render('home', {
        urls: allUrls,
    });
}

async function handleGetSignUpPage(req, res) {
    return res.render('signup');
}

async function handleGetLoginPage(req, res) {
    return res.render('login');
}
module.exports = { handleGetHomePage, handleGetSignUpPage, handleGetLoginPage };
