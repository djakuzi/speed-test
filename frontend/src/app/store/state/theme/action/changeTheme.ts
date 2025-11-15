import { runInAction } from "mobx";
import type { StateTheme } from "../state";
import type { EThemeApp } from "@core/config/types/app.interface";

export function changeTheme(state: StateTheme, theme: EThemeApp) {
	runInAction(() => {
		state.theme = theme
	});
}