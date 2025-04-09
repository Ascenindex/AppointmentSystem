import express from "express";

const router = express.Router();

async function createUser() {
    const user = await prisma.user.create({
        data: {
            name: 'felippi',
            email: 'elsa@prisma.io',
            password: "felipi123"
        },
    })
    return user;
}


// criar registro de usuario teste
router.post("/", (req,res)=>{
    res.json({user: createUser()})
})


export default router;