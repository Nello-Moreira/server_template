import express from 'express';
import cors from 'cors';
import pg from 'pg';

import exampleRoute from './src/routes/example-route.js';

const port = 4000;
const server = express();
server.use(cors());
server.use(express.json());

const { Pool } = pg;
const config = {
	port: 5432,
	user: 'postgres',
	password: '123456',
	host: 'localhost',
	database: 'example_data',
};
const connection = new Pool(config);

server.get(exampleRoute.route, exampleRoute.getRoute);

server.listen(port);
