import express from "express";
import { router } from "./src/routes/index.js";
import helmet from helmet
const server = express();

server.use("/", router);

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);

});