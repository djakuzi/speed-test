import { CONFIG_SWAGGER_API } from '@kn-api/apiSwagger.config';
import { createHtmlLink } from '@kn-common/scripts/html/link.html';
import { Controller, Get, Header } from '@nestjs/common';

@Controller(CONFIG_SWAGGER_API.path)
export class ControllerSwaggerApi {
	constructor() {}

	@Get()
	@Header('Content-Type', 'text/html; charset=utf-8') 
	index() {
		const optionsLinks = CONFIG_SWAGGER_API.modules.map((module) => ({
			href: `${CONFIG_SWAGGER_API.path}${module.route}`,
			text: module.title,
		}));

		const html = createHtmlLink({
			title: 'API Documentation',
			links: optionsLinks,
		});

		return html;
	}
}
