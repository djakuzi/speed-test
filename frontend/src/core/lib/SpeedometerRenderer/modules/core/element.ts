import { EThemeApp } from "@core/config/types/app.interface";

export interface IThemeElement {
	[EThemeApp.DARK]: Record<string, string | string[]> | string;
	[EThemeApp.LIGHT]: Record<string, string | string[]> | string;
}

export abstract class Element {
	protected abstract theme: IThemeElement
	protected abstract drawElement(...args: any[]): void;

	constructor() {
	}

	protected getTheme<R>(theme: EThemeApp): R {
		return this.theme[theme] as R;
	}
}