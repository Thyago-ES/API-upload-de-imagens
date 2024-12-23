import FileController from "./controllers/FileController";

import { Router } from "express";

const router = Router();

router.get("/", FileController.list);

router.post("/", FileController.store);

router.delete("/:id", FileController.delete);

export default router;
