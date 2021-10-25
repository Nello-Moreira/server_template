import { internalErrorResponse } from '../helpers/helpers.js';

import { getAllExamples } from '../data/exampleRouteTable.js';

import exampleSchema from '../validation/exampleValidation.js';

const route = '/example-route';

async function getRoute(request, response) {
	try {
		const examples = await getAllExamples();
		response.status(200).send('this is an example route');
	} catch (error) {
		internalErrorResponse(response, error);
	}
}

const exampleRoute = {
	route,
	getRoute,
};

export default exampleRoute;
