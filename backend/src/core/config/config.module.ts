import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import createMainConfig from './configs/main.config';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [createMainConfig],
		}),
	],
})
export class ModuleConfig { }
