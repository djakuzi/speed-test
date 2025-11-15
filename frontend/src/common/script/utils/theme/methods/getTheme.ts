import { appStore } from "@app/store/store";
import type { EThemeApp } from "@core/config/types/app.interface";

export function getTheme(): EThemeApp {
	return appStore.state.theme.theme;
}