const express =  require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const userCrtl =  require('../controllers/user');

router.post('/signup', userCrtl.signup);
router.post('/login', userCrtl.login);
router.get('/info/:id', userCrtl.info);

module.exports = router;