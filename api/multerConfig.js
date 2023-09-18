const multer = require("multer");

// Define storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/mangas"); // Store files in the public/mangas folder
  },
  filename: function (req, file, cb) {
    // Generate a unique filename (you can customize this logic)
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
