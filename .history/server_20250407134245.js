import express from "express";
import dotenv from "dotenv";

import { router } from "./src/routes/index.js";
const server = express();

dotenv.config();
server.use("/", router);

const port = process.env.PORT || 8080;
server.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);

});
