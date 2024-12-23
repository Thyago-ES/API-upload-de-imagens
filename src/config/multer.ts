import multer from "multer";
import { join, resolve } from "path";

export const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "uploads");
	},
	filename: (req, file, callback) => {
		const time = new Date().getTime();

		callback(null, `${time}_${file.originalname}`);
	},
});
