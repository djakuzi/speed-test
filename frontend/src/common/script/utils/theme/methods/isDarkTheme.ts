import { appStore } from "@app/store/store";
import { EThemeApp } from "@core/config/types/app.interface";

export function isDarkTheme(theme?: EThemeApp): boolean {
	let resTheme: EThemeApp | undefined = theme;
	if (!resTheme) {
		resTheme = appStore.state.theme.theme;
	}

	return resTheme == EThemeApp.DARK;
}