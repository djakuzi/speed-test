import type { IBaseRequest } from "@common/types/api/request.interface";

export interface ResPing extends IBaseRequest {
	ping: number;
}