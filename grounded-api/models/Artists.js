const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    bio: {
        type: String
    },
    imageUrl: {
        type: String
    },
    memberSince: {
        type: String
    }
})

module.exports = mongoose.model('Artist', artistSchema, 'artists');