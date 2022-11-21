import Server from "./models/server";
import dotenv from 'dotenv';

// Configuramos dot.env
dotenv.config();

const server = new Server();

server.listen();