import { CONFIG_API_GEOLOCATION_URL } from "@kn-core/config/configs/apiGeolocationUrl"

export interface IArgsUrlGeolocation {
	nameService: keyof typeof CONFIG_API_GEOLOCATION_URL;
	key?: string;
	ip: string;
	fields?: string;
	lang?: string;
}

export function createUrlGeolocation(type: IArgsUrlGeolocation) {
	const { nameService, key, ip, fields, lang,} = type;
	const homeUrlService = CONFIG_API_GEOLOCATION_URL[nameService];
	
	switch (nameService) {
		case 'ip-api':
			return `${homeUrlService}${ip}?fields=${fields}&lang=${lang}`;
		case 'ipaddress':
			return `${homeUrlService}?key=${key}&ip=${ip}`;
	}
}
