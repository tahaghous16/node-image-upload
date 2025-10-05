import multer from "multer";

// setup multer to upload file in /uploads folder

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const suffix = Date.now();
//     cb(null, suffix + "-" + file.originalname);
//   },
// });

const storage = multer.memoryStorage();

const upload = multer({ storage });

export default upload;
