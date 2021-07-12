/* - - - - - USER CONTROLLERS - - - - - */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


/* ---------- S E Q U E L I Z E - & - M Y S Q L ---------- */
const Sequelize = require('sequelize');
const sequelize = new Sequelize('groupomania', 'student', 'Jolisaris789', {
    host: 'localhost',
    dialect: 'mysql'
  });

// Model Sequelize
const Model = Sequelize.Model;
class User extends Model {}
User.init({
  // attributes
  firstname: { type: Sequelize.STRING, allowNull: false },
  lastname: { type: Sequelize.STRING},
  email: { type: Sequelize.STRING},
  password: { type: Sequelize.STRING},
  job: { type: Sequelize.STRING},
  website: { type: Sequelize.STRING},
  hobbies: { type: Sequelize.STRING}
}, {
  sequelize,
  modelname: 'user',
});


/* ---------- R O U T E S ---------- */

// Create a new user: SIGNUP
exports.signup = (req, res, next) => {
    console.log(req.body);
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        User.create({ 
            email: req.body.email, 
            password: hash, 
            lastname: req.body.lastname,
            firstname: req.body.firstname,
            job: req.body.job,
            website: req.body.website,
            hobbies: req.body.hobbies
        })
        .then(() => {res.status(200).json('Utilisateur créé !')})
        .catch(error => res.status(400).json({ error }));
    })
};

// Find one user: LOGIN
exports.login = (req, res, next) => {
    console.log(req.body.email);
    User.findOne({where : {email: req.body.email}}) 
    .then(user => {
        console.log(user);
        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            console.log("user:" + user.id);
            res.status(200).json({
                userId: user.id,
                token: jwt.sign(
                    { userId: user.id },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '24h' }
                )
            });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

// Find one user: INFO
exports.info = (req, res, next) => {
    console.log(req.params);
    User.findOne({ where : { id: req.params.id }})
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            console.log("user:" + user.id);
            res.status(200).json({
                userId: user._id,
                email: user.email,
                lastname: user.lastname,
                firstname: user.firstname,
                job: user.job,
                website: user.website,
                hobbies: user.hobbies
            });
        })
        .catch(error => res.status(500).json({ error }));
};

// delete one user
exports.unsub = (req, res, next) => {
    console.log(req.params.id);
    console.log(req.body.post.password);
    User.findOne({where : {id: req.params.id}}) 
    .then(user => {
        console.log(user);
        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.post.password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            console.log("yes");
            User.destroy({ where : { id: req.params.id }})
            .then(() => { console.log("utilisateur supprimé !")})
            .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

