import type { EThemeApp } from "@core/config/types/app.interface";

export interface IDrawBaseOptions {
	ctx: CanvasRenderingContext2D;
	size: number;
	theme: EThemeApp;
	nameValue: string;
}

export interface IDrawAllOptions extends IDrawBaseOptions {
	value: number;
	currentValue: number;
	max: number;
}