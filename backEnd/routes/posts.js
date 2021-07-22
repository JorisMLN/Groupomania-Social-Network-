/* - - - - - POSTS ROUTER - - - - - */

// Variables
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postsCtrl =  require('../controllers/posts');
const multer = require('../middleware/multer-config');

// Les routes
router.get('/', auth, postsCtrl.getAllPosts);
router.post('/', auth, postsCtrl.createPost);
router.delete('/:id', auth, postsCtrl.deletePost);
router.put('/like', auth, postsCtrl.likePost);
router.post('/comment', auth, postsCtrl.commentPost);

module.exports = router;