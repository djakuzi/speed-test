import { CONFIG_SWAGGER_MODULE_SPEED } from "./speed/speed.swagger";
import { CONFIG_SWAGGER_MODULE_GEOLOCATION } from "./geolocation/speed.swagger";
import { SwaggerFabricConfig } from "@kn-core/config/configs/swagger.config";

export const CONFIG_SWAGGER_API: SwaggerFabricConfig = {
	path: '/api/docs/',
	modules: [
		CONFIG_SWAGGER_MODULE_SPEED,
		CONFIG_SWAGGER_MODULE_GEOLOCATION	
	]	
}
