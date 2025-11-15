import { Module } from '@nestjs/common';
import { ControllerSwaggerApi } from './api.controller';

@Module({
	controllers: [
		ControllerSwaggerApi
	]
})
export class ModuleSwaggerApi { }
