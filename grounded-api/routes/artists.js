const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/artists/all', controllers.artists.get.allArtists)

module.exports = router;
