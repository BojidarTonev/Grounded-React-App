const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/events/all', controllers.events.get.allEvents)

module.exports = router;
