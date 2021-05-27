const router = require('express').Router();
const usersController = require('../../controllers/usersController');

// Matches with "/api/users"
router.post('/', usersController.create);

router.post('/login', usersController.find);

router.get('/session', usersController.session);

module.exports = router;
