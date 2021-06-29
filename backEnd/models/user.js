/* - - - - - USER MODEL - - - - - */

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const validate = require('mongoose-validator');

const userSchema = mongoose.Schema({
    email: { //varchar(50) primary key
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
    password: { type: String, required: true }, //varchar(100)
    lastname: { type: String, required: true }, //varchar(30)
    firstname: { type: String, required: true }, //varchar(30)
    job: { type: String, required: true }, //varchar(30)
    website: { type: String }, //varchar(50)
    hobbies: { type: String } //varchar(50)
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);