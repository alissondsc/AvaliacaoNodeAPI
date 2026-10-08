import express from "express";
import filmeController from "../controllers/filmeController.js";

const router = express.Router();

router.post("/filmes", filmeController.criar);
router.get("/filmes", filmeController.listar);
router.get("filmes/id", filmeController.buscarPorId);
router.put("filmes/id", filmeController.deletar);

export default router;