const multer = require("config/util/multer");

const storage = multer.diskStorage({
  description: (req, file, callback) => callback(null, __dirname + '/../public/images'),
  filename: (req, file, callback) => callback(null, file.fieldname + '-' + Date.now() + '.jpg')
});

const upload = multer({storage});

module.exports = upload;
