import { Element } from "../../core/element";
import type { IDrawAllOptions } from "../types";
import { EThemeApp } from "@core/config/types/app.interface";

class Core extends Element {
	protected theme = {
		[EThemeApp.DARK]: "#F8FAFC",
		[EThemeApp.LIGHT]: "#0f172a",
	};

	constructor() {
		super();
	}

	protected drawElement(args: IDrawAllOptions) {
		const ctx = args.ctx;
		const centerX = args.size / 2;
		const centerY = args.size / 2;
		const radius = args.size / 2 - (args.size / 8.5);
		const size = args.size / 23;

		const startAngle = 0.75 * Math.PI;
		const endAngle = 0.25 * Math.PI;
		const segments = 10;

		let step;
		if (endAngle < startAngle) {
			step = (endAngle + 2 * Math.PI - startAngle) / segments;
		} else {
			step = (endAngle - startAngle) / segments;
		}

		ctx.save();
		ctx.font = `600 ${size + 'px'} 'Inter', sans-serif`;
		ctx.fillStyle = this.getTheme(args.theme) as string;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";

		for (let i = 0; i <= segments; i++) {
			let angle = startAngle + step * i;

			if (angle > 2 * Math.PI) {
				angle -= 2 * Math.PI;
			}

			const value = Math.round((args.max / segments) * i);

			const offset = size * 2;
			const x = centerX + Math.cos(angle) * (radius - offset / 2);
			const y = centerY + Math.sin(angle) * (radius - offset / 2);

			ctx.fillText(`${value}`, x, y);
		}

		ctx.restore();
	}
}

export class ElementMarks extends Core {
	constructor() {
		super();
	}

	draw(args: IDrawAllOptions) {
		this.drawElement(args);
	}
}