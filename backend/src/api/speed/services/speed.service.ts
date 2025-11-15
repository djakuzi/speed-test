import { createTestFile } from "@kn-common/scripts/fabtrics/file/createTestFile.fabric";
import { calcSpeedMetrics } from "@kn-common/scripts/utils/calc/calcSpeedMetrics.util";
import { Injectable } from "@nestjs/common";
import {Request} from 'express'

@Injectable()
export class ServiceSpeed {
	constructor() {}

	async getResultDownload(sizeMB: number = 30) {
		const { buffer, name, type } = createTestFile({ sizeMB });

		return {
			buffer, 
			name, 
			type
		}
	}

	async getResultupload(req: Request) {
		const promise = new Promise((resolve) => {
			let size = 0;
			const start = performance.now();

			req.on('data', (chunk: Buffer) => {
				size += chunk.length;
			});

			req.on('end', () => {
				const end = performance.now();
				resolve({
					success: true,
					mbps: calcSpeedMetrics(size, start, end).mbps,
				});
			});
		});

		return await promise;
	}
}