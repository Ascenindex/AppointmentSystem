import express from "express";

const server = express()

server.use("/")

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);

})