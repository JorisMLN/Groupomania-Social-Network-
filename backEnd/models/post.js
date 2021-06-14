/* - - - - - POST MODEL - - - - - */

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: {type: String, required: true},
    text: {type: String, trim: true, required: true},
    imageUrl: {type: String},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
});

module.exports = mongoose.model('Sauce', postSchema);