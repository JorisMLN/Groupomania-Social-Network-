const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
    'image/png': 'png'
}

const storage = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        console.log('test storage');
        // const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        // callback(null, name + Date.now() + '.' + extension);
        callback(null, req.params.id + '.' + Date.now() + '.' + extension);
    }
});
 
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000, // 150 KB for a 1080x1080 JPG 90
    },
    fileFilter: (req, file, callback) => {
        console.log('beforetest filter');
        if(MIME_TYPES.hasOwnProperty(file.mimetype)) { // (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg")
            console.log('test filter');
            callback(null, true);
        } else {
            callback(null, false);
            return callback(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

module.exports =  upload.single('image');