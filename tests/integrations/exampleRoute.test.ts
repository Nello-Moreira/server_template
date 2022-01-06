import supertest from 'supertest';
import server, { init } from '../../src/server';

import { closeConnection } from '../../src/repositories/connection';
import HttpStatusCodes from '../../src/enums/statusCodes';

const route = '/examples';

describe('Tests for get /examples', () => {
	beforeAll(async () => {
		await init();
	});

	afterAll(async () => {
		await closeConnection();
	});

	it('should return status code XXX when something happens', async () => {
		const response = await supertest(server).get(route);
		expect(response.status).toBe(HttpStatusCodes.noContent);
	});
});
