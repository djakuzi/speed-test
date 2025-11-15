import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export interface SwaggerModuleConfig {
	module: any;
	route: string;
	title: string;
	description?: string;
	version?: string;
}

export interface SwaggerFabricConfig {
	path: string;
	modules: SwaggerModuleConfig[];
}

export function createSwagger(app: INestApplication, configsFabric: SwaggerFabricConfig[]) {

	for (const config of configsFabric) {
		const configPath = config.path

		if (!configPath) {
			console.warn('[Swagger] Skip swagger setup. Path is empty');
			continue;
		}

		for (const moduleOptions of config.modules) {

			const builder = new DocumentBuilder()
				.setTitle(moduleOptions.title)
				.setVersion(moduleOptions.version || '-');

			if (moduleOptions.description) {
				builder.setDescription(moduleOptions.description);
			}

			const documentConfig = builder.build();

			const document = SwaggerModule.createDocument(app, documentConfig, {
				include: [moduleOptions.module],
			});

			SwaggerModule.setup(`${configPath}${moduleOptions.route}`, app, document);
		}
	}
}
