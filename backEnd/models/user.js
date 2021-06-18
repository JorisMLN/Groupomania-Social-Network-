/* - - - - - USER MODEL - - - - - */

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const validate = require('mongoose-validator');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [
            validate({
                validator: "isEmail",
                message: "not valid mail"
            })
        ]
    },
    password: { type: String, required: true },
    lastname: { type: String, required: true },
    firstname: { type: String, required: true },
    job: { type: String, required: true },
    website: { type: String },
    hobbies: { type: String }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);