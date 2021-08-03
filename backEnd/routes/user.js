/* - - - - - USER ROUTER - - - - - */

// Variables
const express =  require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const userCrtl =  require('../controllers/user');

// Routes
router.post('/signup', /*multer,*/ userCrtl.signup);
router.post('/login', userCrtl.login);
router.get('/info/:id', userCrtl.info);
router.put('/photo/:id', multer, userCrtl.modifyPhoto);
router.put('/modify/:id', userCrtl.modify);
router.delete('/unsub/:id', userCrtl.unsub);

module.exports = router;