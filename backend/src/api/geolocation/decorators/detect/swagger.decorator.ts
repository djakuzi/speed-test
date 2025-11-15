import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function SwaggerDetect() {
	return applyDecorators(
		ApiOperation({
			summary: 'Получение сведений по IP адресу',
		}),
		ApiResponse({
			status: 200,
			description: 'Успешный ответ сведений по IP адресу',
			schema: {
				example: {
					success: true,
					geo: {
						status: 'success',
						query: '88.135.60.28',
						continent: 'Европа',
						continentCode: 'EU',
						country: 'Россия',
						countryCode: 'RU',
						region: 'SMO',
						regionName: 'Смоленская Область',
						city: 'Смоленск',
						district: '',
						zip: '214020',
						lat: 54.7835,
						lon: 32.0391,
						timezone: 'Europe/Moscow',
						offset: 10800,
						currency: 'RUB',
						isp: 'MAN net Ltd',
						org: 'MANNET',
						as: 'AS47118 MAN net Ltd.',
						asname: 'MANNET-AS',
						reverse: '',
						mobile: false,
						proxy: false,
						hosting: false,
					},
				},
			},
		})
	);
}