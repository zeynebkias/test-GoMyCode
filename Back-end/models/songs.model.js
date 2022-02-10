// create exercice schema using mongoose
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const songSchema = new Schema({
    singer: String,
    title: {
        type: String,
        required: false,
    },
    album: String,
    

    created_at: {
        type: Date,
        default: Date.now
    },

    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Song", songSchema);