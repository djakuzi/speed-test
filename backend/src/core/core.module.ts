import { Module } from '@nestjs/common';
import { ModuleConfig } from './config/config.module';

@Module({
	imports: [
		ModuleConfig
	],
})
export class ModuleCore { }
