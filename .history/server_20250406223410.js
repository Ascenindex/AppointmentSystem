import express from "express";
import {  } from ".routes";
const server = express()

server.use("/")

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);

})