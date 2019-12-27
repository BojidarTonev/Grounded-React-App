const controllers = require('../controllers/');
const router = require('express').Router();

router.post('/register', controllers.users.post.register)

module.exports = router;
