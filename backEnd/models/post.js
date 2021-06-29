/* - - - - - POST MODEL - - - - - */

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: {type: String, required: true}, 
    text: {type: String, trim: true, required: true}, 
    firstname: {type: String, trim: true, required: true}, 
    lastname: {type: String, trim: true, required: true}, 
    gifUrl: {type: String},
    likes: {type: Number, default: 0},
    usersLiked: {type: [String], default: []} 
});

module.exports = mongoose.model('Post', postSchema);