const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: String
    }
})

module.exports = mongoose.model('Artist', artistSchema, 'artists');