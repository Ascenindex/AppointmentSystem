import express from "express";

const router = express.Router();

async function createUser() {
    const user = await prisma.user.create({
        data: {
            email: 'elsa@prisma.io',
            name: 'Elsa Prisma',
        },
    })
}


// criar registro de usuario teste
router.post("/", (req,res)=>{
    
})


export default router;