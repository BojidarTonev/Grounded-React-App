const router = require('../routes/');
const config = require('../config/config');

module.exports = (app) => {
    app.use('/', router.artists);
    app.use('/', router.events);
    app.use('/', router.tracks);
    app.use('*', (req, res, next) => res.send('<h1>Something went wrong. Try again! :thumbsup: </h1>'))
}