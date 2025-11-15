import type { IGeoLocation } from "@common/api/services/Geolocation/types/models/geolocation.interface";

export type ReturnTypes = ReturnType<typeof parseGeo>;

export function parseGeo(geo: IGeoLocation | null) {
	if (geo === null) {
		return null;
	}
	
	let result = [
		{
			title: 'Базовая информация',
			values: [
				{ name: 'IP-адрес', value: geo.query || '—' },
			]
		},
		{
			title: 'Географические данные',
			values: [
				{ name: 'Код континента', value: geo.continentCode || '—' },
				{ name: 'Континент', value: geo.continent || '—' },
				{ name: 'Код страны', value: geo.countryCode || '—' },
				{ name: 'Страна', value: geo.country || '—' },
				{ name: 'Код региона', value: geo.region || '—' },
				{ name: 'Регион', value: geo.region || '—' },
				{ name: 'Город', value: geo.city || '—' },
				{ name: 'Почтовый индекс', value: geo.zip || '—' },
				{ name: 'Район', value: geo.district || '—' },
			]
		},
		{
			title: 'Координаты',
			values: [
				{ name: 'Широта', value: geo.lat !== undefined ? geo.lat : '—' },
				{ name: 'Долгота', value: geo.lon !== undefined ? geo.lon : '—' },
			]
		},
		{
			title: 'Временные данные',
			values: [
				{ name: 'Часовой пояс', value: geo.timezone || '—' },
				{ name: 'Смещение от UTC', value: geo.offset !== undefined ? geo.offset : '—' },
				{ name: 'Валюта', value: geo.currency || '—' },
			]
		},
		{
			title: 'ISP/Network данные',
			values: [
				{ name: 'ISP', value: geo.isp || '—' },
				{ name: 'Организация', value: geo.org || '—' },
				{ name: 'AS', value: geo.as || '—' },
				{ name: 'AS Name', value: geo.asname || '—' },
				{ name: 'Обратный DNS', value: geo.reverse || '—' },
			]
		},
		{
			title: 'Данные безопасности',
			values: [
				{ name: 'Мобильный', value: geo.mobile !== undefined ? (geo.mobile ? 'Да' : 'Нет') : '—' },
				{ name: 'Прокси', value: geo.proxy !== undefined ? (geo.proxy ? 'Да' : 'Нет') : '—' },
				{ name: 'Хостинг', value: geo.hosting !== undefined ? (geo.hosting ? 'Да' : 'Нет') : '—' },
			]
		}
	];

	return result;
}