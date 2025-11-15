import type { IGeoLocation } from "@common/api/services/Geolocation/types/models/geolocation.interface";
import type { IBaseRequest } from "@common/types/api/request.interface";

export interface ResFullGeoData extends IBaseRequest {
	geo: IGeoLocation;
}