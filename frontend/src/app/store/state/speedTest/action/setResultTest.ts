import { runInAction } from "mobx";
import type { StateSpeedTest } from "../state";

export interface IResultTest {
	download?: number;
	ping?: number;
	upload?: number;
}

export function setResultTest(state: StateSpeedTest, result: IResultTest) {
	runInAction(() => {
		if (result.download) {
			state.download = result.download;
		}

		if (result.ping) {
			state.ping = result.ping;
		}

		if (result.upload) {
			state.upload = result.upload;
		}
	});
}