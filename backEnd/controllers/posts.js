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
  text: { type: Sequelize.TEXT},
  userId: { type: Sequelize.NUMBER},
  firstname: { type: Sequelize.STRING},
  lastname: { type: Sequelize.STRING},
}, {
  sequelize,
  modelname: 'post'
});

class PostLike extends Model {}
PostLike.init({
  postId: { type: Sequelize.NUMBER},
  userId: { type: Sequelize.NUMBER},
  status: { type: Sequelize.BOOLEAN},
}, {
  sequelize,
  modelname: 'postlike'
});

class Comment extends Model {}
Comment.init({
  postId: { type: Sequelize.NUMBER},
  userId: { type: Sequelize.NUMBER},
  text: { type: Sequelize.TEXT},
  firstname: { type: Sequelize.STRING},
  lastname: { type: Sequelize.STRING},
}, {
  sequelize,
  modelname: 'comment'
});

// Association
PostLike.Post = PostLike.belongsTo(Post);
Post.PostLike = Post.hasMany(PostLike);
Post.Comment = Post.hasMany(Comment, {as: "comments"});
Comment.Post = Comment.belongsTo(Post);


/* ---------- R O U T E S ---------- */

exports.getAllPosts = (req, res, next) => {
  Post.findAll({
    attributes: ["id", "text", "userId", [sequelize.fn("GROUP_CONCAT", sequelize.col('PostLikes.userId')), "userLiked"]],
    order: [
      ['id', 'DESC']
    ],
    include:[
      { 
        model: PostLike,
        where: {
          status: 1
        },
        attributes: [],
        required: false
      },
      { 
        model: Comment,
        as: "comments",
        attributes: ["id", "userId", "text", "firstname", "lastname"],
        required: false,
      },
    ],
    group: ["Post.id", "comments.id"]
  })
  .then((response) => res.status(200).json(response))
  .catch(error => console.log(error));
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
};
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

exports.commentPost = (req, res, next) => {
  console.log(req.body.payload);
  Comment.create({
    postId: req.body.payload.postId,
    userId: req.body.payload.userId,
    text: req.body.payload.post.text,
    firstname: req.body.payload.post.firstname,
    lastname: req.body.payload.post.lastname,
    })
  .then(() => res.status(201).json({ message: 'Commentaire enregistré !' }))
  .catch(error => res.status(400).json({ error }));
};
