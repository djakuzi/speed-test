import { IIpApiResponse } from "@kn-api/geolocation/types/geolocation/IIpApiResponse.interface";
import { createUrlGeolocation } from "@kn-common/scripts/fabtrics/api/createUrlGeolocation.fabric";
import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class ServiceGeolocation {
	constructor() {}

	async lookup(ip: string) {
		if (ip === '::1' || ip === '127.0.0.1') {
			ip = '88.135.60.28'; // Мой тестовый IP djakuzi
		}

		const url = createUrlGeolocation({
			ip: ip,
			nameService: 'ip-api',
			fields: "66846719",
			lang: "ru"
		})
		
		const { data } = await axios.get<IIpApiResponse>(url);

		if (data.status !== 'success') {
			throw new Error('Geo lookup failed: ' + data.message);
		}

		return data;
	}
}