import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { getConfigBackend } from '@kn-common/scripts/utils/config/getConfigBackend';
import { ModuleSwagger } from './swagger/swagger.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const configService = app.get(ConfigService);
	const configBackend = await getConfigBackend(configService);

	if (configBackend?.cors) {
		app.enableCors(configBackend?.cors);
	}

	ModuleSwagger.onApplication(app);

	// createSwagger();

	await app.listen(configBackend?.port ?? 3000);
}

bootstrap();
