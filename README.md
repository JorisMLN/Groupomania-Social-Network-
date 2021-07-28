# JorisMonleon_7_08062021
#### install node
```
https://nodejs.org/en/download/
```
#### install Git
```
run git clone https://github.com/JorisMLN/JorisMonleon_7_08062021.git
```
.

# For the DataBase
#### Install MySQL
```
http://dev.mysql.com/downloads/mysql/#downloads
```
#### log in with your account
```
mysql -u user -p
```
#### Create the database
```
CREATE DATABASE groupomania CHARACTER SET 'utf8';
```
#### add these 4 tables to the database
```
CREATE TABLE Users (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    email VARCHAR(50),
    password VARCHAR(100),
    lastname VARCHAR(30),
    firstname VARCHAR(30),
    job VARCHAR(30),
    website VARCHAR(50),
    hobbies VARCHAR(50),
    picture VARCHAR(100),
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY (id)
)
ENGINE=INNODB;

CREATE TABLE Posts (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    userId CHAR(30),
    text TEXT,
    firstname VARCHAR(30),
    lastname VARCHAR(30),
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY (id)
)
ENGINE=INNODB;

CREATE TABLE PostLikes (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    postId SMALLINT,
    userId SMALLINT,
    status BOOLEAN,
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY (id)
)
ENGINE=INNODB;

CREATE TABLE Comments (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    postId SMALLINT,
    userId CHAR(30),
    text TEXT,
    firstname VARCHAR(30),
    lastname VARCHAR(30),
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY (id)
)
ENGINE=INNODB;
```
.

# For the Back-End "BackEnd"
#### open git bash in cloned repository
#### cd backEnd

#### Project setup
```
npm install
```
#### At the root of the backend, create a '.env' file and add your MySQL profile IDs according to the following example.
```
SQL_USER=user
SQL_PASSWORD=password
```
#### Launch the server
```
nodemon server
```
.

# For the Front-End "groupomania"
#### open git bash in cloned repository
#### cd groupomania
#### Project setup
```
npm install
```
#### FOR Dev 
```
npm run serve
```
#### FOR PROD Compiles and minifies
```
npm run build
```
#### Launch the build
```
cd dist
node app.js
```
#### Open in your browser with the url:
```
http://localhost:8080/
```
-

### Customize configuration
