import { Module } from '@nestjs/common';
import { ModuleGeolocation } from './geolocation/geolocation.module';
import { ModuleSpeed } from './speed/speed.module';
import { APP_FILTER } from '@nestjs/core';
import { BaseApiExceptionFilter } from '@kn-common/filter/baseApi.filter';

@Module({
	imports: [
		ModuleGeolocation,
		ModuleSpeed
	],
	providers: [
		{
			provide: APP_FILTER,
			useClass: BaseApiExceptionFilter,
		},
	],
})

export class ModuleApi {}
