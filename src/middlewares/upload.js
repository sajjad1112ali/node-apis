const multer = require('multer');
const path = require('path');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new ApiError(httpStatus.BAD_REQUEST, 'Only images are allowed'));
};

const storage = multer.diskStorage(
  {
    destination: './src/public/uploads/',
    filename(req, file, cb) {
      cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    },
  },
);

const upload = multer({ storage, fileFilter });

module.exports = upload;
