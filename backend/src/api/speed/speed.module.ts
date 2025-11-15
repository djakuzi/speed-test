import { Module } from '@nestjs/common';
import { ControllerSpeed } from './speed.controller';
import { ServiceSpeed } from './services/speed.service';

@Module({
	imports: [
	],
	controllers: [
		ControllerSpeed
	],
	providers: [
		ServiceSpeed,
	]
})

export class ModuleSpeed { 
}
