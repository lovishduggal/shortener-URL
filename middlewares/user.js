const { getUserBySessionId } = require('../service/userDirect');
async function checkUserIsLoggedIn(req, res, next) {
    const sessionId = req.cookies.uid;
    if (!sessionId) return res.render('login');

    const user = getUserBySessionId(sessionId);
    if (!user) return res.render('login');

    req.user = user;
    next();
}

async function filterUrls(req, res, next) {
    const sessionId = req.cookies.uid;
    const user = getUserBySessionId(sessionId);
    req.user = user;
    next();
}
module.exports = { checkUserIsLoggedIn, filterUrls };
