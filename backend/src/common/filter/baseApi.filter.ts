import { parseException } from '@kn-common/scripts/utils/exception/parseException.util';
import {
	Catch,
	ExceptionFilter,
	ArgumentsHost,
} from '@nestjs/common';
import { Response, Request } from 'express';

@Catch()
export class BaseApiExceptionFilter implements ExceptionFilter {
	catch(exception: unknown, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest<Request>();
		const resException = parseException(exception);
		const date = new Date().toISOString();

		const table = {
			type: 'error',
			method: `${request.url}`,
			date: `${date}`,
		}

		console.table(table);

		response.status(resException.status).json({
			succes: false,
			statusCode: resException.status,
			message: resException.message,
			path: request.url,
			timestamp: date,
		});
	}
}
