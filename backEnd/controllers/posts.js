/* - - - - - POSTS CONTROLLERS - - - - - */

const fs = require('fs');


/* ---------- S E Q U E L I Z E - & - M Y S Q L ---------- */
const Sequelize = require('sequelize');
const sequelize = new Sequelize('groupomania', 'student', 'Jolisaris789', {
    host: 'localhost',
    dialect: 'mysql'
  });

// Model Sequelize
const Model = Sequelize.Model;
class Post extends Model {}
Post.init({
  // attributes
  text: { type: Sequelize.TEXT},
  userId: { type: Sequelize.NUMBER},
  firstname: { type: Sequelize.STRING},
  lastname: { type: Sequelize.STRING},
}, {
  sequelize,
  modelname: 'post'
  // options
});

class PostLike extends Model {}
PostLike.init({
  // attributes
  postId: { type: Sequelize.NUMBER},
  userId: { type: Sequelize.NUMBER},
  status: { type: Sequelize.BOOLEAN},
}, {
  sequelize,
  modelname: 'postlike'
  // options
});


/* ---------- R O U T E S ---------- */

exports.getAllPosts = (req, res, next) => {
  Post.findAll({
    order: [
      ['id', 'DESC']
    ]
  })
.then(posts => res.status(200).json(posts))
.catch(error => res.status(400).json({ error }));
};

exports.createPost = (req, res, next) => {
  console.log(req.body.post);
  Post.create({
    text: req.body.post.text,
    userId: req.body.post.userId,
    firstname: req.body.post.firstname,
    lastname: req.body.post.lastname,
    })
  .then(() => res.status(201).json({ message: 'Post enregistrée !' }))
  .catch(error => res.status(400).json({ error }));
};
    
exports.deletePost = (req, res, next) => {
  console.log(req.params.id);
  let postId = req.params.id;
  Post.destroy({ where: { id: postId}})
    .then(() => {res.status(200).json({ message: 'Post supprimé !'})})
    .catch(error => res.status(500).json({ error }));
};

exports.likePost = (req, res, next) => {
  console.log(req.body.payload);
  PostLike.create({
    postId: req.body.payload.postId,
    userId: req.body.payload.userId,
    status: true,
  })
  .then(() => res.status(201).json({ message: 'Like enregristré!' }))
  .catch(error => res.status(400).json({ error }));
};

