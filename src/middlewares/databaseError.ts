/* eslint-disable no-console */
import { Request, Response, NextFunction } from 'express';
import HttpStatusCodes from '../enums/statusCodes';

export default function databaseErrorMiddleware(
	error: Error,
	request: Request,
	response: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next:NextFunction
) {
	console.error(response);
	return response.sendStatus(HttpStatusCodes.internalError);
}
