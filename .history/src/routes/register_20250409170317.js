import express from "express";
import { PrismaClient } from '@prisma/client'; 

const router = express.Router();
const prisma = new PrismaClient(); 


async function createUser() {
    const findUser = await prisma.user.findUnique({
        where:
        
    })


    const user = await prisma.user.create({
        data: {
            name: 'felippi123',
            email: 'elsa@teste.io',
            password: "felipi1223"
        },
    });
    return user;
}

// criar registro de usuário teste
router.post("/", async (req, res) => {
    const user = await createUser();
    res.json({ user });
    
});

export default router;
