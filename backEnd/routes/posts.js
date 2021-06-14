
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const postsCtrl =  require('../controllers/sauces');
const multer = require('../middleware/multer-config');

router.get('/', auth, postsCtrl.getAllPosts);
router.get('/:id', auth, postsCtrl.getOnePost);
router.post('/', auth, multer, postsCtrl.createPost);
router.put('/:id', auth, multer, postsCtrl.modifyPost);
router.delete('/:id', auth, postsCtrl.deletePost);
// router.post('/:id/like', auth, postsCtrl.likeDislikeSauce);    Mise en place du systeme de commentaire.

module.exports = router;