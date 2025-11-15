import { Element } from "../../core/element";
import type { IDrawAllOptions } from "../types";
import { EThemeApp } from "@core/config/types/app.interface";

class Core extends Element {
	protected theme = {
		[EThemeApp.DARK]: {
			gradient: ["#1e293b", "#475569", "#94a3b8"], // от темного к светлому
			shadow: "rgba(0, 0, 0, 0.25)",
			center: "#1e293b"
		},
		[EThemeApp.LIGHT]: {
			gradient: ["#cbd5e1", "#94a3b8", "#64748b"],
			shadow: "rgba(0, 0, 0, 0.3)",
			center: "#e2e8f0"
		}
	};

	constructor() {
		super();
	}

	protected drawElement(args: IDrawAllOptions) {
		const ctx = args.ctx;
		const centerX = args.size / 2;
		const centerY = args.size / 2;
		const length = args.size / 3.4; 
		const angle = args.currentValue > args.max ? 0.25 * Math.PI : (0.75 + (args.currentValue / args.max) * 1.5) * Math.PI;
		const theme = this.getTheme<typeof this.theme[EThemeApp.DARK]>(args.theme);

		ctx.save();

		ctx.shadowColor = theme.shadow;
		ctx.shadowBlur = args.size / 80;
		ctx.shadowOffsetX = 1;
		ctx.shadowOffsetY = 1;

		const grad = ctx.createLinearGradient(centerX, centerY, centerX + Math.cos(angle) * length, centerY + Math.sin(angle) * length);
		grad.addColorStop(0, theme.gradient[0]);
		grad.addColorStop(0.5, theme.gradient[1]);
		grad.addColorStop(1, theme.gradient[2]);

		ctx.beginPath();
		ctx.moveTo(centerX, centerY);
		ctx.lineTo(centerX + Math.cos(angle) * length, centerY + Math.sin(angle) * length);
		ctx.lineWidth = args.size / 45;
		ctx.lineCap = "round";
		ctx.strokeStyle = grad;
		ctx.stroke();

		ctx.shadowBlur = 0;
		ctx.beginPath();
		ctx.arc(centerX, centerY, args.size / 30, 0, Math.PI * 2);
		ctx.fillStyle = theme.center;
		ctx.fill();

		ctx.restore();
	}
}

export class ElementNeedle extends Core {
	constructor() {
		super();
	}

	draw(args: IDrawAllOptions) {
		this.drawElement(args);
	}
}
