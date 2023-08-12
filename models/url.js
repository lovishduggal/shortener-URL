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
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
});

const URL = mongoose.model('urls', urlSchema);

module.exports = URL;
