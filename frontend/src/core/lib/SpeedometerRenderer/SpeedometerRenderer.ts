import { EThemeApp } from "@core/config/types/app.interface";
import { Render } from "./modules/render/render";

export default class SpeedometerRenderer {
	private render: Render;

	state = {
		inited: false,
	}

	constructor(ctx: CanvasRenderingContext2D, size: number, max: number, theme: EThemeApp, nameValue: string) {
		const optionsRender = {
			size,
			max,
			theme,
			nameValue,
		}

		this.render = new Render(ctx, optionsRender);

		this.state = {
			inited: true,
		}
	}

	draw(value: number) {
		this.render.draw(value);
	}

	animateTo(value: number) {
		this.render.animateTo(value);
	}

	stop() {
		this.render.stop();
	}

	update(value: number, max: number, size: number, theme: EThemeApp) {
		this.render.update(value, max, size, theme);
	}
}
