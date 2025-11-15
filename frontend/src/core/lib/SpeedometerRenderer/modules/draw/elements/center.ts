import { Element } from "../../core/element";
import type { IDrawAllOptions } from "../types";
import { EThemeApp } from "@core/config/types/app.interface";

class Core extends Element {
	protected theme = {
		[EThemeApp.DARK]: {
			gradient: ["#0f172a", "#475569"],
		},
		[EThemeApp.LIGHT]: {
			gradient: ["#475569", "#1e293b"],
		}
	}

	constructor() {
		super();
	}

	protected drawElement(args: IDrawAllOptions) {
		const centerX = args.size / 2;
		const centerY = args.size / 2;

		const hubGrad = args.ctx.createRadialGradient(centerX, centerY, 2, centerX, centerY, 10);
		const theme = this.getTheme<typeof this.theme[EThemeApp.DARK]>(args.theme);

		hubGrad.addColorStop(0, theme.gradient[0]);
		hubGrad.addColorStop(1, theme.gradient[1]);
		args.ctx.beginPath();
		args.ctx.arc(centerX, centerY, args.size / 30, 0, Math.PI * 2);
		args.ctx.fillStyle = hubGrad;
		args.ctx.fill();
	}
}

export class ElementCenter extends Core {
	constructor() {
		super();
	}

	draw(args: IDrawAllOptions) {
		this.drawElement(args);
	}
}