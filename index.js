import express from 'express';
import cors from 'cors';

import exampleRoute from './src/routes/example-route.js';

const port = 4000;
const server = express();

server.use(cors());

server.get(exampleRoute.route, exampleRoute.getRoute);

server.listen(port);
