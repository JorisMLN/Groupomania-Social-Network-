# Groupomania Social Network
#### Install node
```
https://nodejs.org/en/download/
```
#### Install Git
```
https://git-scm.com/downloads
```
#### Open git bash were you want to clone the repo
```
git clone https://github.com/JorisMLN/JorisMonleon_7_08062021.git
```


# For the DataBase
#### Install MySQL
```
http://dev.mysql.com/downloads/mysql/#downloads
```
#### Log in with your account
```
mysql -u user -p
```
#### Create the database
```
CREATE DATABASE groupomania CHARACTER SET 'utf8';
```
#### Add these 4 tables to the database
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
    userId SMALLINT UNSIGNED,
    text TEXT,
    firstname VARCHAR(30),
    lastname VARCHAR(30),
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY (id),
    CONSTRAINT fk_user_id
        FOREIGN KEY (userId)
        REFERENCES Users (id) ON DELETE SET NULL
)
ENGINE=INNODB;

CREATE TABLE PostLikes (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    postId SMALLINT UNSIGNED,
    userId SMALLINT,
    status BOOLEAN,
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY (id),
    CONSTRAINT fk_post_id
        FOREIGN KEY (postId)
        REFERENCES Posts (id) ON DELETE SET NULL
)
ENGINE=INNODB;

CREATE TABLE Comments (
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    postId SMALLINT UNSIGNED,
    userId CHAR(30),
    text TEXT,
    firstname VARCHAR(30),
    lastname VARCHAR(30),
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY (id),
    CONSTRAINT fk_comPost_id
        FOREIGN KEY (postId)
        REFERENCES Posts (id) ON DELETE SET NULL
)
ENGINE=INNODB;
```


# For the Back-End "BackEnd"
#### Open git bash in cloned repository
```
cd backEnd
```
#### Project setup
```
npm install
```
#### At the root of the backend, create a '.env' file and add your MySQL profile IDs according to the following example.
```
SQL_USER=user
SQL_PASSWORD=password
BCRYPT_KEY=RANDOM_TOKEN_SECRET
```
#### Launch the server
```
nodemon server
```

# For the Front-End "groupomania"
#### Open git bash in cloned repository
```
cd groupomania
```
#### Project setup
```
npm install
```

* #### FOR DEV
     #### Launch the server
    ```
    npm run serve
    ```

* #### FOR PROD
     #### Compiles and minifies
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
