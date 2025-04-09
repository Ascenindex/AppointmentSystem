// src/routes/index.js
import { Router } from "express";
const router = Router();

// suas rotas aqui
router.get("/", (req, res) => {
    res.send("Rota principal funcionando!");
});

export { router };
