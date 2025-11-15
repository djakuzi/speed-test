import { Controller, Get, Post, Req, StreamableFile } from '@nestjs/common';
import { Request } from 'express';
import { ServiceSpeed } from './services/speed.service';
import { SwaggerDownload } from './decorators/download/swagger.decorator';
import { SwaggerPing } from './decorators/ping/swagger.decorator';
import { SwaggerUpload } from './decorators/upload/swagger.decorator';

@Controller('speed')
export class ControllerSpeed {
	constructor(private readonly serviceSpeed: ServiceSpeed) { }

	@Get('ping')
	@SwaggerPing()
	async ping() {
		return {
			success: true,
		}
	}

	@Get('download')
	@SwaggerDownload()
	async download() {
		const { buffer, name, type } = await this.serviceSpeed.getResultDownload();

		return new StreamableFile(buffer, {
			type,
			disposition: `attachment; filename="${name}"`,
		});
	}

	@Post('upload')
	@SwaggerUpload()
	async upload(@Req() req: Request) {
		return await this.serviceSpeed.getResultupload(req);
	}
}
