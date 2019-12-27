const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    return mongoose.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on("error", (err) => {
        console.log("error: ", err)
      })
      mongoose.connection.on("connected", (res, req) => {
        console.log("mongoose is connected!")
      })
};