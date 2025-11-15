import { ApiProperty } from '@nestjs/swagger';

export class DtoGeolocationResponse {
	@ApiProperty({
		example: 'success',
		description: 'Статус запроса',
		enum: ['success', 'fail'],
	})
	status: 'success' | 'fail';

	@ApiProperty({
		example: '88.135.60.28',
		description: 'IP адрес для запроса',
	})
	query: string;

	@ApiProperty({
		example: null,
		description: 'Сообщение об ошибке (только при status === fail)',
		required: false,
		nullable: true,
	})
	message?: string;

	@ApiProperty({
		example: 'Европа',
		description: 'Название континента',
		required: false,
	})
	continent?: string;

	@ApiProperty({
		example: 'EU',
		description: 'Код континента (ISO 3166)',
		required: false,
	})
	continentCode?: string;

	@ApiProperty({
		example: 'Россия',
		description: 'Название страны',
		required: false,
	})
	country?: string;

	@ApiProperty({
		example: 'RU',
		description: 'Код страны (ISO 3166-1 alpha-2)',
		required: false,
	})
	countryCode?: string;

	@ApiProperty({
		example: 'SMO',
		description: 'Код региона/области',
		required: false,
	})
	region?: string;

	@ApiProperty({
		example: 'Смоленская Область',
		description: 'Название региона/области',
		required: false,
	})
	regionName?: string;

	@ApiProperty({
		example: 'Смоленск',
		description: 'Название города',
		required: false,
	})
	city?: string;

	@ApiProperty({
		example: '',
		description: 'Район города',
		required: false,
	})
	district?: string;

	@ApiProperty({
		example: '214020',
		description: 'Почтовый индекс',
		required: false,
	})
	zip?: string;

	@ApiProperty({
		example: 54.7835,
		description: 'Широта (latitude)',
		required: false,
		type: Number,
		minimum: -90,
		maximum: 90,
	})
	lat?: number;

	@ApiProperty({
		example: 32.0391,
		description: 'Долгота (longitude)',
		required: false,
		type: Number,
		minimum: -180,
		maximum: 180,
	})
	lon?: number;

	@ApiProperty({
		example: 'Europe/Moscow',
		description: 'Часовой пояс (IANA timezone)',
		required: false,
	})
	timezone?: string;

	@ApiProperty({
		example: 10800,
		description: 'Смещение UTC в секундах',
		required: false,
		type: Number,
	})
	offset?: number;

	@ApiProperty({
		example: 'RUB',
		description: 'Код национальной валюты (ISO 4217)',
		required: false,
	})
	currency?: string;

	// 🏢 ISP/Network данные
	@ApiProperty({
		example: 'MAN net Ltd',
		description: 'Интернет-провайдер',
		required: false,
	})
	isp?: string;

	@ApiProperty({
		example: 'MANNET',
		description: 'Название организации',
		required: false,
	})
	org?: string;

	@ApiProperty({
		example: 'AS47118 MAN net Ltd.',
		description: 'Автономная система (AS number + организация)',
		required: false,
	})
	as?: string;

	@ApiProperty({
		example: 'MANNET-AS',
		description: 'Название AS (RIR)',
		required: false,
	})
	asname?: string;

	@ApiProperty({
		example: '',
		description: 'Reverse DNS запись',
		required: false,
	})
	reverse?: string;

	// 🔒 Безопасность
	@ApiProperty({
		example: false,
		description: 'Мобильное (сотовое) соединение?',
		required: false,
		type: Boolean,
	})
	mobile?: boolean;

	@ApiProperty({
		example: false,
		description: 'VPN, Proxy или Tor exit адрес?',
		required: false,
		type: Boolean,
	})
	proxy?: boolean;

	@ApiProperty({
		example: false,
		description: 'Хостинг, колокация или дата-центр?',
		required: false,
		type: Boolean,
	})
	hosting?: boolean;
}