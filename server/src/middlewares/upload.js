"use strict"

const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('Middleware - req.body.type:', req.body.type);
        let folder = '';
        if (req.body.type === 'cars') {
            folder = 'uploads/cars/';
        } 
     
        else {
            folder = 'uploads/others/';
        }
        console.log('Middleware - folder:', folder)
        cb(null, folder);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

// const upload = multer({ storage })

const upload = multer({ storage })

// module.exports = upload
module.exports = {
    single: upload.single('file'), // For single file uploads
    multiple: upload.array('files', 10), // For multiple file uploads
}