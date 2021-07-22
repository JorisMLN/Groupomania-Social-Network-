/* - - - - - USER ROUTER - - - - - */

// Variables
const express =  require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const userCrtl =  require('../controllers/user');
const auth = require('../middleware/auth');

// Routes
router.post('/signup', multer, userCrtl.signup);
router.post('/login', userCrtl.login);
router.delete('/unsub/:id', /*auth,*/ userCrtl.unsub);
router.get('/info/:id', /*auth,*/ userCrtl.info);
router.put('/modify/:id', /*auth,*/ userCrtl.modify);
router.put('/photo/:id', /*auth,*/ multer, userCrtl.modifyPhoto);

module.exports = router;