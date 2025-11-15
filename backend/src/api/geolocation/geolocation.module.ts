import { Module } from '@nestjs/common';
import { ControllerGeolocation } from './geolocation.controller';
import { ServiceGeolocation } from './services/geolocation.service';

@Module({
	imports: [
	],
	controllers: [
		ControllerGeolocation,
	],
	providers: [
		ServiceGeolocation
	]
})

export class ModuleGeolocation { }
