import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
    const { name, email, password } = req.body; // Pegando dados do cliente

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return res.status(409).json({ message: "Usuário já existe." }); // 409 = conflito
        }

        const newUser = await prisma.user.create({
            data: { name, email, password },
        });

        return res.status(201).json({
            message: "Usuário criado com sucesso!",
            user: newUser,
        });

    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        return res.status(500).json({ message: "Erro interno do servidor." });
    }
});

export default router;
