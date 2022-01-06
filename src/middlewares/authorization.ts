import { Request, Response, NextFunction } from 'express';
import HttpStatusCodes from '../enums/statusCodes';

export default async function authorizationMiddleware(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const token = request.headers.authorization?.replace('Bearer ', '');

	if (!token) {
		return response
			.status(HttpStatusCodes.unauthorized)
			.send("It's necessary to provide an authorization token");
	}

	if (typeof token !== 'string') {
		return response.status(HttpStatusCodes.badRequest).send('Invalid token');
	}

	/*
	check session at database. Eg:

	const session = await usersService.getSession(token);
 	*/

	const session = { id: 0 };

	if (!session.id) {
		return response
			.status(HttpStatusCodes.unauthorized)
			.send('Invalid or expired token');
	}

	response.locals = session;

	return next();
}
