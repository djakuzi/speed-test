/**
 * Статус и базовая информация
 */
export interface IGeoLocationStatus {
	query: string;
}

/**
 * Географические данные
 */
export interface IGeoLocationGeo {
	continent?: string;
	continentCode?: string;
	country?: string;
	countryCode?: string;
	region?: string;
	regionName?: string;
	city?: string;
	district?: string;
	zip?: string;
}

/**
 * Координаты
 */
export interface IGeoLocationCoordinates {
	lat?: number;
	lon?: number;
}

/**
 * Временные данные
 */
export interface IGeoLocationTime {
	timezone?: string;
	offset?: number;
	currency?: string;
}

/**
 * ISP/Network данные
 */
export interface IGeoLocationNetwork {
	isp?: string;
	org?: string;
	as?: string;
	asname?: string;
	reverse?: string;
}

/**
 * Данные безопасности
 */
export interface IGeoLocationSecurity {
	mobile?: boolean;
	proxy?: boolean;
	hosting?: boolean;
}

/**
 * ПОЛНЫЙ ОТВЕТ от IP API
 */
export interface IGeoLocation
	extends IGeoLocationStatus,
	IGeoLocationGeo,
	IGeoLocationCoordinates,
	IGeoLocationTime,
	IGeoLocationNetwork,
	IGeoLocationSecurity { }