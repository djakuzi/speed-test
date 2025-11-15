import { appStore } from "@app/store/store";
import { reset } from "./reset";
import { updateState } from "./updateState";
import type { IStateGeolocation } from "../types/state.interface";

export const actions = () => ({
	updateState: (payload: Partial<IStateGeolocation>) => updateState(appStore.state.geolocation, payload),
	reset: () => reset(appStore.state.geolocation),
});

export type TActions = ReturnType<typeof actions>;