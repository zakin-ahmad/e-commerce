const multer = require('multer');
const path = require('path');

const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(file)
        // console.log(req)

        cb(null,  path.join(__dirname, '../Public/images'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type'), false);
    }
};

const imageUpload = multer({
    storage: imageStorage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

module.exports = imageUpload;
