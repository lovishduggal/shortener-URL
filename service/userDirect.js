const jwt = require('jsonwebtoken');
const serectKey = 'lovish@123$';

function setSessionIdWithUser(user) {
    const payLoad = {
        id: user.id,
        email: user.email,
    };
    return jwt.sign(payLoad, serectKey);
}

function getUserBySessionId(token) {
    try {
        return jwt.verify(token, serectKey);
    } catch (err) {
        if (err) return null;
    }
}
module.exports = { setSessionIdWithUser, getUserBySessionId };
