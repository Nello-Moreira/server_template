const route = '/example-route';

function getRoute(request, response) {
	response.status(200).send('this is an example route');
}

const exampleRoute = {
	route,
	getRoute,
};

export default exampleRoute;
