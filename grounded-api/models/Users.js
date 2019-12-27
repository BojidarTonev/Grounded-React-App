const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String
    },
    address: {
        type: String
    }
})

module.exports = mongoose.model('Users', usersSchema, 'users');