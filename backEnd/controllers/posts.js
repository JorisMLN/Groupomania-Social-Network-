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

let posts = Post.findAll({
  order: [
    ['id', 'DESC']
  ]
});

let postLikes =   PostLike.findAll({ where: {
  status: true
}});

Promise.all([posts, postLikes])
.then(values => {
  let postValues = values[0];
  let postLikeValues = values[1];
  postValues.forEach(post => {
    let filteredPostLike = postLikeValues.filter(postLike => postLike.dataValues.postId === post.dataValues.id);
    post.dataValues.userLiked = filteredPostLike.map(postLike => {
      return postLike.dataValues.userId;
    });
    console.log(post.dataValues.userLiked);
  });
  return res.status(200).json(postValues);
})
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
  let postId = req.body.payload.postId;
  let userId = req.body.payload.userId;
  PostLike.findOne({ where: { postId: postId, userId: userId}})
  .then((postLike) => {
    if(!postLike){
      createPostLike(res, postId, userId);
    } else {
      updatePostLike(res, postLike);
    }
  })
  .catch(error => res.status(400).json({ error }));
}

function createPostLike(res, postId, userId){
  PostLike.create({
    postId: postId,
    userId: userId,
    status: true,
  })
  .then(() => res.status(201).json({message: 'Like enregristré!'}))
  .catch(error => res.status(400).json({ error }));
}

function updatePostLike(res, postLike){
  postLike.update({
    status: !postLike.status
  })
  .then(() => res.status(201).json({ message: postLike.status ? 'Like ajouté!' : 'like enlevé' }))
  .catch(error => res.status(400).json({ error }));
}

