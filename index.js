const express = require('express');
const app = express();
const { connectMongoDb } = require('./connectWithDB');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { checkUserIsLoggedIn } = require('./middlewares/user');
const urlRouter = require('./routes/url');
const shortIDRouter = require('./routes/shortID');
const staticRoute = require('./routes/home');
const userRoute = require('./routes/user');
const path = require('path');
const PORT = 3000;
app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));
connectMongoDb('mongodb://127.0.0.1:27017/short-url').then(() => {
    console.log('MONGO DB connected successfully');
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', staticRoute);
app.use('/url', checkUserIsLoggedIn, urlRouter);
app.use('/short', shortIDRouter);
app.use('/user', userRoute);
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
