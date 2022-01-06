import '../setup/dotenvSetup';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import { dbConnection } from './repositories/connection';
import databaseErrorMiddleware from './middlewares/databaseError';

import exampleRouter from './routers/example';

const server = express();
server.use(cors());
server.use(express.json());

server.use('/examples', exampleRouter);

server.use(databaseErrorMiddleware);

export async function init() {
	await dbConnection();
}

export default server;
