import express from "express";
import cors from "cors";
import routes from "./routes/routes.js";
import { getHome } from "./routes/home.js";

const port = 4000;
const server = express();

server.use(cors());

server.get(routes.home, getHome);

server.listen(port);
