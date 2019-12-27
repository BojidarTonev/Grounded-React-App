const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
    name: {
        type: String
    },
    place: {
        type: String
    },
    dateStart: {
        type: Date
    },
    dateEnd: {
        type: Date
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    }
})

module.exports = mongoose.model('Events', eventsSchema, 'events');