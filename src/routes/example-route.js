import { getAllExamples } from '../data/example-route.js';

import { internalErrorResponse } from '../helpers.js';

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
