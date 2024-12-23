import express from "express";
import router from "./routes";

import multer from "multer";
import { storage } from "./config/multer";

const upload = multer({ storage });

class App {
	server: express.Application;

	constructor() {
		this.server = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		this.server.use(express.json());
		this.server.use("/files", express.static("uploads"));
	}

	routes() {
		this.server.use("/uploads", upload.single("file"), router);
	}
}

export default new App().server;
