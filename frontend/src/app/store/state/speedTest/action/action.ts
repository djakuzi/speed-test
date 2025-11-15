import { appStore } from "@app/store/store";
import {setResultTest, type IResultTest } from "./setResultTest";
import { reset } from "./reset";

export const actions = () => ({
	setResultTest: (result: IResultTest) => setResultTest(appStore.state.speedTest, result),
	reset: () => reset(appStore.state.speedTest),
});

export type TActions = ReturnType<typeof actions>;