/**
 * Статус и базовая информация
 */
export interface IIpApiResponseStatus {
	status: 'success' | 'fail';
	query: string;
	message?: string;
}

/**
 * Географические данные
 */
export interface IIpApiResponseGeo {
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
export interface IIpApiResponseCoordinates {
	lat?: number;
	lon?: number;
}

/**
 * Временные данные
 */
export interface IIpApiResponseTime {
	timezone?: string;
	offset?: number;
	currency?: string;
}

/**
 * ISP/Network данные
 */
export interface IIpApiResponseNetwork {
	isp?: string;
	org?: string;
	as?: string;
	asname?: string;
	reverse?: string;
}

/**
 * Данные безопасности
 */
export interface IIpApiResponseSecurity {
	mobile?: boolean;
	proxy?: boolean;
	hosting?: boolean;
}

/**
 * ПОЛНЫЙ ОТВЕТ от IP API
 */
export interface IIpApiResponse
	extends IIpApiResponseStatus,
	IIpApiResponseGeo,
	IIpApiResponseCoordinates,
	IIpApiResponseTime,
	IIpApiResponseNetwork,
	IIpApiResponseSecurity { }