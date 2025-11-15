import { Controller, Get, Req} from '@nestjs/common';
import { Request } from 'express';
import { ServiceGeolocation } from './services/geolocation.service';
import { SwaggerDetect } from './decorators/detect/swagger.decorator';

@Controller('geolocation')
export class ControllerGeolocation {
	constructor(
		private readonly serviceGeolocation: ServiceGeolocation
	) { }

	@Get('')
	@SwaggerDetect()
	async detect(@Req() req: Request) {
		const ip = req.headers['x-forwarded-for'] ||
			req.socket.remoteAddress ||
			req.ip;

		const result = await this.serviceGeolocation.lookup(ip as string);

		return {
			success: true,
			geo: result,
		};
	}
}
