/* - - - - - POSTS CONTROLLERS - - - - - */

const Post = require('../models/post')
const fs = require('fs');


exports.getAllPosts = (req, res, next) => {
    Post.find()
        .then(posts => res.status(200).json(posts))
        .catch(error => res.status(400).json({ error }));
};

exports.getOnePost = (req, res, next) => {
    Post.findOne({ _id: req.params.id })
        .then(post => res.status(200).json(post))
        .catch(error => res.status(404).json({ error }));
};

exports.createPost = (req, res, next) => {
    const postObject = JSON.parse(req.body.post);
    console.log(postObject);
    // delete postObject._id;
    const post = new Post({
        ...postObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    console.log(post);
    sauce.save()
        .then(() => res.status(201).json({ message: 'Post enregistrée !' }))
        .catch(error => res.status(400).json({ error }));
};

// exports.modifyPost = (req, res, next) => {
//     const sauceObject = req.file ?
//         {
//             ...JSON.parse(req.body.sauce),
//             imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
//         } : { ...req.body };
//         console.log(sauceObject);
//     Sauce.updateOne({ _id: req.params.id }, sauceObject )
//         .then(() => res.status(200).json({ message: 'objet modifié !' }))
//         .catch(error => res.status(400).json({ error }));
// };

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