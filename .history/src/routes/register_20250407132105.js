import express from "express";

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Hello register page");
})

export default router;