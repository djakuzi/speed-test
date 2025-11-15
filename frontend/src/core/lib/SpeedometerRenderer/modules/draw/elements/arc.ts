import { Element, } from "../../core/element";
import type { IDrawAllOptions } from "../types";
import { EThemeApp } from "@core/config/types/app.interface";

class Core extends Element {
	protected theme = {
		[EThemeApp.DARK]: {
			gradient: ['#38bdf8', "#60a5fa"],
		},
		[EThemeApp.LIGHT]: {
			gradient: ['#38bdf8', "#60a5fa"],
		},
		["Excess"]: '#F87171'
	}

	constructor() {
		super();
	}


	protected drawElement(args: IDrawAllOptions) {
		const isExcess = args.currentValue > args.max;
		const centerX = args.size / 2;
		const centerY = args.size / 2;
		const radius = args.size / 2 - (args.size / 23 + args.size / 23);
		const endAngle = isExcess ? 0.25 * Math.PI : (0.75 + (args.currentValue / args.max) * 1.5) * Math.PI;
		const grad = args.ctx.createLinearGradient(0, 0, args.size, 0);
		const theme = this.getTheme<typeof this.theme[EThemeApp.DARK]>(args.theme);

		grad.addColorStop(0, theme.gradient[0]);
		grad.addColorStop(isExcess ? .6 : 1, theme.gradient[1]);

		if (isExcess) {
			grad.addColorStop(1, this.theme['Excess']);
		}

		args.ctx.beginPath();
		args.ctx.arc(centerX, centerY, radius, 0.75 * Math.PI, endAngle, false);
		args.ctx.lineWidth = args.size / 20;
		args.ctx.strokeStyle = grad;
		args.ctx.lineCap = "round";
		args.ctx.stroke();
	}
}

export class ElementArc extends Core {
	constructor() {
		super();
	}

	draw(args: IDrawAllOptions) {
		this.drawElement(args);
	}
}