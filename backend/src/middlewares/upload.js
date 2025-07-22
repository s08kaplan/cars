"use strict"

const multer = require('multer')
const path = require("path")
const { sanitizeCarName } = require("../helpers/sanitize")
const { checkFileExists } = require("../helpers/fileCheck")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log('Middleware - req.body.type:', req.body.type);
         const { type, carName = 'Unknown' } = req.body;
         const safeCarName = sanitizeCarName(carName);
        let folder = '';
        if (type === 'cars') {
            folder = path.join('uploads', 'cars', safeCarName);
        } 
     
        else {
            folder = path.join('uploads', 'others');
        }

        console.log('Middleware - folder:', folder)
        checkFileExists(folder)
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