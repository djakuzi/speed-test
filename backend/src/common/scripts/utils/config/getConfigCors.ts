import { ConfigBackend, ConfigCors } from '@kn-core/config/configs/main.config';
import { ConfigService } from '@nestjs/config';

export async function getConfigCors(
	configService: ConfigService
): Promise<ConfigCors | undefined> {
	const configCors = configService.get<ConfigBackend>('backend')?.cors;

	return configCors;
}
