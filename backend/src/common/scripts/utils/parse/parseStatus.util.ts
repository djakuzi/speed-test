import { HttpException, HttpStatus } from "@nestjs/common";


export function parseStatus(exception: unknown) {
	if (exception instanceof HttpException) {
		return exception.getStatus();
	}

	return HttpStatus.INTERNAL_SERVER_ERROR;
}