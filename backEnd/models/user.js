/* - - - - - USER MODEL - - - - - */

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const validate = require('mongoose-validator');

const userSchema = mongoose.Schema({
    // userId: Donnée automatiquement par mongoDb,
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
    password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);