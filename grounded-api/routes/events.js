const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/events/all', controllers.events.get.allEvents)
router.get('/events/featured-events', controllers.events.get.featuredEvents);

module.exports = router;
