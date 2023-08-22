const User = require('../models/user');
const { v4: uuidv4 } = require('uuid');
const { setSessionIdWithUser } = require('../service/userDirect');

async function handleUserSignUp(req, res) {
    try {
        const { name, email, password } = req.body;
        await User.create({
            name,
            email,
            password,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
    return res.render('login');
}

async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({
        email,
        password,
    });
    if (!user)
        return res.render('signup', {
            error: 'Invalid username or password',
        });
    const token = setSessionIdWithUser(user);
    res.cookie('uid', token);
    return res.redirect('/');
}

module.exports = { handleUserSignUp, handleUserLogin };
