const URL = require('../models/url');
async function handleGetHomePage(req, res) {
    const allUrls = await URL.find({});
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
