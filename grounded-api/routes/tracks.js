const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/tracks/all', controllers.tracks.get.allTracks)

module.exports = router;
