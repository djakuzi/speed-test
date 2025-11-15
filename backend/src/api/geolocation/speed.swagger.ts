import { SwaggerModuleConfig } from "@kn-core/config/configs/swagger.config";
import { ModuleGeolocation } from "./geolocation.module"

export const CONFIG_SWAGGER_MODULE_GEOLOCATION: SwaggerModuleConfig = {
	module: ModuleGeolocation,
	route: 'geolocation',
	title: 'Geolocation API',
	description: 'Документация получения данных геолокации по IP адресу',
};