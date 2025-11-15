import { ConfigBackend } from '@kn-core/config/configs/main.config';
import { ConfigService } from '@nestjs/config';

export async function getConfigBackend(
	configService: ConfigService
): Promise<ConfigBackend | undefined> {
	const configCors = configService.get<ConfigBackend>('backend');

	return configCors;
}
