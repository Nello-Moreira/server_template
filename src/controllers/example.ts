import { Request, Response, NextFunction } from 'express';
import HttpStatusCodes from '../enums/statusCodes';
import exampleService from '../services/example';
import NoContentError from '../errors/NoContent';

async function getRoute(
	request: Request,
	response: Response,
	next: NextFunction
) {
	try {
		await exampleService.searchExamples();

		return response.sendStatus(HttpStatusCodes.notImplemented);
	} catch (error) {
		if (error instanceof NoContentError) {
			return response.sendStatus(HttpStatusCodes.noContent);
		}

		return next(error);
	}
}

export default { getRoute };
