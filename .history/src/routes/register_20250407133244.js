import express from "express";

const router = express.Router();

function createUser(name, email, password){
    const user ={
        name: "Felippi",
        email: "ascendino@gmail.com",
        password: "felipi123"
    }
}


// criar registro de usuario teste
router.post("/", (req,res)=>{
    
})


export default router;