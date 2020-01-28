const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/artists/all', controllers.artists.get.allArtists);
router.get('/artist/:id', controllers.artists.get.artistDetails);

module.exports = router;
