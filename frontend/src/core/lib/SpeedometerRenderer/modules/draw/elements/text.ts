import { Element } from "../../core/element";
import type { IDrawAllOptions } from "../types";
import { EThemeApp } from "@core/config/types/app.interface";



class Core extends Element {
	protected theme = {
		[EThemeApp.DARK]: '#f8fafc',
		[EThemeApp.LIGHT]: '#0f172a',
		["Excess"]: '#F87171'
	}

	constructor() {
		super();
	}

	protected drawElement(args: IDrawAllOptions) {
		const centerX = args.size / 2;
		const centerY = args.size / 2;
		const sizeValue = args.size / 15;
		const sizeName = args.size / 20;
		const offset = (centerY / 3);

		args.ctx.font = `bold ${sizeValue + 'px'} 'Inter', sans-serif`;
		args.ctx.fillStyle = args.currentValue > args.max ? this.theme['Excess'] : this.getTheme(args.theme) as string;
		args.ctx.textAlign = "center";
		args.ctx.fillText(`${args.currentValue.toFixed(0)}`, centerX, centerY + offset);

		args.ctx.font = `bold ${sizeName + 'px'} 'Inter', sans-serif`;
		args.ctx.fillText(`${args.nameValue}`, centerX, centerY + offset + sizeValue);
	}
}

export class ElementText extends Core {
	constructor() {
		super();
	}

	draw(args: IDrawAllOptions) {
		this.drawElement(args);
	}
}