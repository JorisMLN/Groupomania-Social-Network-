/* - - - - - N E T W O R K - - - - - */


/* - varaibles - */
const express = require('express');
// const mongoose = require('mongoose');
const path = require('path');
const Sequelize = require('sequelize');

const postsRoutes = require('./routes/posts');
const userRoutes =  require('./routes/user');


/* - MongoDataBase - */
// mongoose.connect('mongodb+srv://JorisM:Jolisaris789@cluster0.9eqyb.mongodb.net/DataP7?retryWrites=true&w=majority',
//   { useNewUrlParser: true,
//     useUnifiedTopology: true })
//   .then(() => console.log('Connexion à MongoDB réussie !'))
//   .catch(() => console.log('Connexion à MongoDB échouée !'));


/* - Sequelize/mySQL - */
const sequelize = new Sequelize('groupomania', 'student', 'Jolisaris789', {
  host: 'localhost',
  dialect: 'mysql'
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  
/* - App - */
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
// ins.exports = sequelize;