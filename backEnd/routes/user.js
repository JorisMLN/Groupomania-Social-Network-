/* - - - - - USER ROUTER - - - - - */

const express =  require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const userCrtl =  require('../controllers/user');

router.post('/signup', userCrtl.signup);
// router.post('/signup', multer, userCrtl.signup);
router.post('/login', userCrtl.login);
router.get('/info/:id', userCrtl.info);

module.exports = router;