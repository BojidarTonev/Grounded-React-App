const mongoose = require('mongoose');

const tracksSchema = new mongoose.Schema({
    name: {
        type: String
    },
    author: {
        type: String
    },
    imageUrl: {
        type: String
    },
    duration: {
        type: String
    },
    album: {
        type: String
    }
})

module.exports = mongoose.model('Tracks', tracksSchema, 'tracks');