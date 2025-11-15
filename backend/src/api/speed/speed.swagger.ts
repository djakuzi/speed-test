import { SwaggerModuleConfig } from "@kn-core/config/configs/swagger.config";
import { ModuleSpeed } from "./speed.module";

export const CONFIG_SWAGGER_MODULE_SPEED: SwaggerModuleConfig = {
	module: ModuleSpeed,
	route: 'speed',
	title: 'Speed API',
	description: 'Документация измерения скорости',
};