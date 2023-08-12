const mapSessionIdToUserObject = new Map();

function setSessionIdWithUser(sessionId, user) {
    mapSessionIdToUserObject.set(sessionId, user);
}

function getUserBySessionId(sessionId) {
    return mapSessionIdToUserObject.get(sessionId);
}
module.exports = { setSessionIdWithUser, getUserBySessionId };
