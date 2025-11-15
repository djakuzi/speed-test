import { Element } from "../../core/element";
import type { IDrawAllOptions } from "../types";
import { EThemeApp } from "@core/config/types/app.interface";

class Core extends Element {
	protected theme = {
		[EThemeApp.DARK]: '#1e293b',
		[EThemeApp.LIGHT]: '#e5e7eb'
	}

	constructor() {
		super();
	}

	protected drawElement(args: IDrawAllOptions) {
		const centerX = args.size / 2;
		const centerY = args.size / 2;
		const radius = args.size / 2 - (args.size / 23 + args.size / 23);

		args.ctx.beginPath();
		args.ctx.arc(centerX, centerY, radius, 0.75 * Math.PI, 0.25 * Math.PI, false);
		args.ctx.lineWidth = args.size / 20;
		args.ctx.strokeStyle = this.getTheme(args.theme) as string;
		args.ctx.lineCap = "round";
		args.ctx.stroke();
	}
}

export class ElementBackground extends Core {
	constructor() {
		super();
	}

	draw(args: IDrawAllOptions) {
		this.drawElement(args);
	}
}