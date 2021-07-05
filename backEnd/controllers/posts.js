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

exports.getAllPosts = (req, res, next) => {
    Post.findAll()
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
  let id = req.params.id;
  Post.destroy({ where: { id: id}})
    .then(() => {res.status(200).json({ message: 'Post supprimé !'})})
    .catch(error => res.status(500).json({ error }));
};





/* ---------- M O N G O O S E - & - M O N G O D B ---------- */
// const Post = require('../models/post')

// exports.deletePost = (req, res, next) => {
//     Sauce.findOne({ _id: req.params.id })
//         .then(sauce => {
//             const filename = sauce.imageUrl.split('/images/')[1];
//             fs.unlink(`images/${filename}`, () => {
//                 Sauce.deleteOne({ _id: req.params.id })
//                     .then(() => res.status(200).json({ message: 'objet supprimé !' }))
//                     .catch(error => res.status(400).json({ error }));
//             });
//         })
//         .catch(error => res.status(500).json({ error }));
// };

// exports.likeDislikeSauce = (req, res, next) => {

//     const likeObject = req.body;
//     Sauce.findOne({ _id: req.params.id })
//         .then(sauce => {
//             checkLikes(likeObject, sauce);
//             console.log("checkLikes " + sauce.likes);
//             Sauce.updateOne({ _id: req.params.id }, sauce)
//                 .then(() => res.status(200).json({ message: 'objet updaté !' }))
//                 .catch(error => res.status(400).json({ error }));
//         })

//     function checkLikes(likeObject, sauce) {
//         switch (likeObject.like) {
//             case 1:
//                 {
//                     sauce.likes++;
//                     sauce.usersLiked.push(likeObject.userId);
//                     let idIndex = sauce.usersDisliked.indexOf(likeObject.userId);
//                     if (idIndex > -1) {
//                         removeDislike(sauce, idIndex)
//                     }
//                     break;
//                 }
//             case -1:
//                 {
//                     sauce.dislikes++;
//                     sauce.usersDisliked.push(likeObject.userId);
//                     let idIndex = sauce.usersLiked.indexOf(likeObject.userId);
//                     if (idIndex > -1) {
//                         removeLike(sauce, idIndex)
//                     }
//                     break;
//                 }
//             default:
//                 {
//                     let idIndex = sauce.usersDisliked.indexOf(likeObject.userId);
//                     if (idIndex > -1) {
//                         removeDislike(sauce, idIndex)
//                     }
//                     else {
//                         idIndex = sauce.usersLiked.indexOf(likeObject.userId);
//                         removeLike(sauce, idIndex)
//                     }
//                     break;
//                 }
//         }
//     }

//     function removeLike(sauce, idIndex) {
//         sauce.usersLiked.splice(idIndex, 1);
//         sauce.likes--;
//     }
//     function removeDislike(sauce, idIndex) {
//         sauce.usersDisliked.splice(idIndex, 1);
//         sauce.dislikes--;
//     }
// };