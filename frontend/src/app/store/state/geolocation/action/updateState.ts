import { runInAction } from "mobx";
import type { StateGeolocation } from "../state";
import type { IStateGeolocation } from "../types/state.interface";


export function updateState(state: StateGeolocation, payload: Partial<IStateGeolocation>) {
	runInAction(() => {
		if (payload === null) return;

		if (payload.isLoading === true) {
			state.error = null;
			state.isLoading = payload.isLoading;
		}

		if (payload.error !== undefined && payload.error !== null) {
			state.isLoading = false;
			state.error = payload.error;
		}

		if (payload.geo !== undefined && payload.geo !== null) {
			state.isLoading = false;
			state.geo = payload.geo;
		}
	});
}