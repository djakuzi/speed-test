import type { IBaseRequest } from "@common/types/api/request.interface";

export interface ResUpload extends IBaseRequest {
	mbps: number;
}