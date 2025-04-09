// src/routes/index.js
import { Router } from "express";
import register from "./register"
const router = Router();

// suas rotas aqui
router.get("/", (req, res) => {
    res.send("Rota principal funcionando!");
});

router.use("/register", register)

export { router };
