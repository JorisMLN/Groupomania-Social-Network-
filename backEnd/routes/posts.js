
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const postsCtrl =  require('../controllers/posts');
const multer = require('../middleware/multer-config');


// Les routes

router.get('/', auth, postsCtrl.getAllPosts);
// router.post('/', auth, postsCtrl.createPost);
// router.post('/', auth, multer, postsCtrl.createPost);

// router.get('/:id', auth, postsCtrl.getOnePost);
// router.put('/:id', auth, multer, postsCtrl.modifyPost);
// router.delete('/:id', auth, postsCtrl.deletePost);
// router.post('/:id/like', auth, postsCtrl.likeDislikeSauce);    Mise en place du systeme de commentaire.

module.exports = router;