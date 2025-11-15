import type { IBaseRequest } from "@common/types/api/request.interface";

export interface ResDownload extends IBaseRequest {
	mbps: number;
}