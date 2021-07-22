const multer = require('multer');

//Formats
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
    'image/png': 'png'
}

//Parametrage avant le storage
const storage = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        console.log('test storage');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, req.params.id + '.' + Date.now() + '.' + extension);
    }
});

//upload et filtre du format
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000, // 150 KB for a 1080x1080 JPG 90
    },
    fileFilter: (req, file, callback) => {
        console.log('beforetest filter');
        if(MIME_TYPES.hasOwnProperty(file.mimetype)) { 
            console.log('test filter');
            callback(null, true);
        } else {
            callback(null, false);
            return callback(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

module.exports =  upload.single('image');