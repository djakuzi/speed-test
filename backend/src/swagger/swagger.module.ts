import { INestApplication, Module } from '@nestjs/common';
import { ModuleSwaggerApi } from './api/api.module';
import { CONFIG_SWAGGER_API } from '@kn-api/apiSwagger.config';
import { createSwagger } from '@kn-core/config/configs/swagger.config';

@Module({
	imports: [
		ModuleSwaggerApi
	],
})
export class ModuleSwagger { 
	static onApplication(app: INestApplication) {
		const listConfig = [
			CONFIG_SWAGGER_API
		]

		createSwagger(app, listConfig);
	}
}
