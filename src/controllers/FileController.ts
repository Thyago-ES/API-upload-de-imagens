import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import fs from "fs";

const prisma = new PrismaClient();

class FileController {
	async store(req: Request, res: Response) {
		try {
			if (!req.file) {
				res.status(400).json({ message: "Uma imagem é necessária" });
				return;
			}

			const newFile = await prisma.file.create({
				data: {
					path: req.file.path,
					description: req.body.description,
				},
			});

			res
				.status(201)
				.json({ message: "Arquivo armazenado com sucesso", newFile });
		} catch (err) {
			res.status(500).json({ message: "Erro ao armazenar o arquivo" });
		}
	}

	async list(req: Request, res: Response) {
		try {
			const allFiles = await prisma.file.findMany();

			res.status(200).json(allFiles);
		} catch (err) {
			res.status(500).json({ message: "Erro ao listar arquivos" });
		}
	}

	async delete(req: Request, res: Response) {
		try {
			const id = parseInt(req.params.id);

			const existingFile = await prisma.file.findFirst({
				where: {
					id,
				},
			});

			if (!existingFile) {
				res.status(404).json({ message: "Arquivo não encontrado" });
			}

			const deletedFile = await prisma.file.delete({
				where: {
					id,
				},
			});

			fs.unlinkSync(deletedFile.path);

			res.status(200).json({ message: "Arquivo excluído com sucesso" });
		} catch (err) {
			res.status(500).json({ message: "Erro ao deletar arquivo" });
		}
	}
}

export default new FileController();
