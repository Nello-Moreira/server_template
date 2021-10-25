import supertest from 'supertest';
import server from '../src/server.js';
import dbConnection from '../src/data/connection';
import exampleRoute from '../src/routes/exampleRoute.js';

const someTest = async () => {
	const response = await supertest(server).get(exampleRoute.route);
	expect(response.status).toBe(200);
};

const routeTests = () => {
	beforeAll(() => {
		dbConnection.query('DELETE FROM example');
	});

	it('should return something', someTest);
};

describe('Tests for route', routeTests);
