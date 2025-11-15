import CoreServiceApiAxios from '@core/api/axios/axios.service';
import type { ResPing } from './types/response/ping.interface';
import type { ResDownload } from './types/response/download.interface';
import type { ResUpload } from './types/response/upload.interface';
import { createTestFile } from '@common/script/fabrics/file/createTestFile.fabric';
import { calcSpeedMetrics } from '@common/script/utils/calc/calcSpeedMetrics.util';
import { ErrorApi } from '@common/script/utils/error/apiError.util';
import { calcPing } from '@common/script/utils/calc/calcPing.itil';
import { calcAverageValue } from '@common/script/utils/calc/calcAverageValue.util';

class Speed extends CoreServiceApiAxios {

	constructor(nameController: string) {
		super(nameController);

		this.endPoints = {
			getPing: `/${nameController}/ping`,
			upload: `/${nameController}/upload`,
			download: `/${nameController}/download`,
		};
	}

	async getResultPing(repeats = 5): Promise<ResPing> {
		try {
			const times: number[] = [];
			let countError = 0;

			for (let i = 0; i < repeats; i++) {
				const start = performance.now();

				const response = await this.apiClient.get<ResPing>(
					this.endPoints.getPing,
				);

				if (!response.data.success) {
					countError += 1;
				}

				if (countError === repeats) {
					throw new Error(response.data.error ? response.data.error : 'Произошла ошибка при измерении ping');
				} 

				const end = performance.now();

				times.push(calcPing(start, end));
			}

			return {
				success: true,
				ping: calcAverageValue(times),
			}
		} catch (e) {
			throw new ErrorApi(e);
		}
	}

	async getResultDownload(): Promise<ResDownload> {
		try {
			const start = performance.now();

			const response = await this.apiClient.get<Blob>(
				this.endPoints.download,
				{
					responseType: 'blob'
				}
			);

			const end = performance.now();
			const blob = response.data;

			return {
				success: true,
				mbps: calcSpeedMetrics(blob.size, start, end).mbps,
			};
		} catch (e) {
			throw new ErrorApi(e);
		}
	}

	async getResultUpload(): Promise<ResUpload> {
		try {
			const { blob } = createTestFile({ sizeMB: 20 });

			const response = await this.apiClient.post<ResUpload>(
				this.endPoints.upload,
				blob,
				{
					headers: {
						'Content-Type': 'application/octet-stream',
					},
					responseType: 'json',
				}
			);

			if (!response.data.success) {
				throw new Error(response.data.error ? response.data.error : 'Произошла ошибка при измерении upload');
			}

			return {
				success: true,
				mbps: response.data.mbps,
			};
		} catch (e) {
			throw new ErrorApi(e);
		}
	}
}

export const ServiceSpeed = new Speed('speed');