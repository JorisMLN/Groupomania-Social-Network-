const express =  require('express');
const router = express.Router();

const userCrtl =  require('../controllers/user');

router.post('/signup', userCrtl.signup);
router.post('/login', userCrtl.login);
router.get('/info', userCrtl.info);

module.exports = router;