import { runInAction } from "mobx";
import type { StateGeolocation } from "../state";

export function reset(state: StateGeolocation) {
	runInAction(() => {
		state.error = null;
		state.isLoading = false;
		state.geo = null;
	});
}