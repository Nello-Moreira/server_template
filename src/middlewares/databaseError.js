/* eslint-disable no-console */
export default function databaseErrorMiddleware(
	error,
	request,
	response,
	next
) {
	console.error(error);
	return response.sendStatus(500);
}
