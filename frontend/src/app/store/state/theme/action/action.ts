import type { EThemeApp } from "@core/config/types/app.interface";
import { changeTheme } from "./changeTheme";
import { appStore } from "@app/store/store";

export const actions = () => ({
	changeTheme: (theme: EThemeApp) => changeTheme(appStore.state.theme, theme),
});

export type TActions = ReturnType<typeof actions>;