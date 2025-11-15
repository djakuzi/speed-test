import type { IGeoLocation } from "@common/api/services/Geolocation/types/models/geolocation.interface";


export interface IStateGeolocation {
	error: string | null;
	isLoading: boolean;
	geo: IGeoLocation | null;
}