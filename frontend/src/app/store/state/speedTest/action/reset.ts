import { runInAction } from "mobx";
import type { StateSpeedTest } from "../state";

export interface IResultTest {
	download: number | null;
	ping: number | null;
	upload: number | null;
}

export function reset(state: StateSpeedTest) {
	runInAction(() => {
		state.download = null;
		state.ping = null;
		state.upload = null;
	});
}