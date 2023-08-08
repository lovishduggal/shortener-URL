const express = require('express');
const app = express();
const { connectMongoDb } = require('./connectWithDB');
const { pareseBody } = require('./middlewares/url');
const mongoose = require('mongoose');
const urlRouter = require('./routes/url');
const shortIDRouter = require('./routes/shortID');
const PORT = 3000;
connectMongoDb('mongodb://127.0.0.1:27017/short-url').then(() => {
    console.log('MONGO DB connected successfully');
});
app.use(pareseBody());
app.use('/url', urlRouter);
app.use('/', shortIDRouter);
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
