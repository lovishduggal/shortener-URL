const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const urlSchema = new mongoose.Schema({
    ShortId: {
        type: String,
        required: true,
        unique: true,
    },
    urlRedirect: {
        type: String,
        required: true,
        unique: true,
    },
    visitHistory: [
        {
            timestamp: { type: Number },
        },
    ],
});

const URL = mongoose.model('urls', urlSchema);

module.exports = URL;
