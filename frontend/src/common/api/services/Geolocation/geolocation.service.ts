import CoreServiceApiAxios from '@core/api/axios/axios.service';
import type { ResFullGeoData } from './types/response/fullGeolocationData.interface';
import { ErrorApi } from '@common/script/utils/error/apiError.util';

class Geolocation extends CoreServiceApiAxios {

	constructor(nameController: string) {
		super(nameController);

		this.endPoints = {
			getFullData:  `/${nameController}/`,
		};
	}

	async getFullGeo(ip?: string): Promise<ResFullGeoData> {
		try {
			const response = await this.apiClient.get<ResFullGeoData>(
				this.endPoints.getFullData,
			);

			if (!response.data.success) {
				throw new Error(response.data.error ? response.data.error : 'Произошла ошибка при измерении upload');
			}

			return {
				success: true,
				geo: response.data.geo,
			}
		} catch (e) {
			throw new ErrorApi(e);
		}
	}
}

export const ServiceGeolocation = new Geolocation('geolocation');