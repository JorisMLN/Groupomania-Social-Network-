/* - - - - - USER ROUTER - - - - - */

// Variables
const express =  require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const userCrtl =  require('../controllers/user');

// Routes
router.post('/signup', multer, userCrtl.signup);
router.post('/login', userCrtl.login);
router.delete('/unsub/:id', userCrtl.unsub);
router.get('/info/:id', userCrtl.info);
router.put('/modify/:id', userCrtl.modify);
router.put('/photo/:id', multer, userCrtl.modifyPhoto);

module.exports = router;