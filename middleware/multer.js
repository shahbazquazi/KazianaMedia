import multer from "multer";

//multer storage
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

export default upload;

