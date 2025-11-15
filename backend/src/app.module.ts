import { ModuleApi } from "@kn-api/api.module";
import { ModuleCore } from "@kn-core/core.module";
import { Module, NestModule } from "@nestjs/common";
import { ModuleSwagger } from "./swagger/swagger.module";

@Module({
	imports: [
		ModuleCore,
		ModuleSwagger,
		ModuleApi,
	],
})
export class AppModule implements NestModule {
	configure() {}
}
