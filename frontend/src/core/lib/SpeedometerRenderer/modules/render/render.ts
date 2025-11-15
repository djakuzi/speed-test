import type { EThemeApp } from "@core/config/types/app.interface";
import { DrawElements } from "../draw/draw";

export class Render {
	private ctx: CanvasRenderingContext2D;
	private dependencies: {
		draw: DrawElements,
	};
	private state: {
		isUpdate: boolean,
		isRenderedBase: boolean,
		currentValue: number,
		animationFrame?: number,
	}

	private options: {
		size: number;
		max: number;
		theme: EThemeApp;
		nameValue: string;
	}

	constructor(
		ctx: CanvasRenderingContext2D,
		options: typeof this.options,
	) {
		this.ctx = ctx;
		this.options = options;

		this.state = {
			isUpdate: false,
			isRenderedBase: false,
			currentValue: 0,
			animationFrame: undefined,
		}

		this.dependencies = {
			draw: new DrawElements(),
		}
	}

	draw(value: number) {
		this.ctx.clearRect(0, 0, this.options.size, this.options.size);

		const base = {
			ctx: this.ctx,
			size: this.options.size,
			value: value,
			currentValue: this.state.currentValue,
			max: this.options.max,
			theme: this.options.theme,
			nameValue: this.options.nameValue
		};

		this.dependencies.draw.create('background', base);
		this.dependencies.draw.create('arc', base);
		this.dependencies.draw.create('needle', base);
		this.dependencies.draw.create('center', base);
		this.dependencies.draw.create('text', base);
		this.dependencies.draw.create('marks', base);

		if (this.state.isUpdate) {
			this.state.isUpdate = false;
		}
	}

	/* TODO: 
	Сделать перерисовку не всего полотна а только тех элеменов, которые должны перерисовываться
	*/
	#animateDraw(value: number) {
		this.ctx.clearRect(0, 0, this.options.size, this.options.size);

		const base = {
			ctx: this.ctx,
			size: this.options.size,
			value: value,
			currentValue: this.state.currentValue,
			max: this.options.max,
			theme: this.options.theme,
			nameValue: this.options.nameValue
		};

		this.dependencies.draw.create('background', base);
		this.dependencies.draw.create('arc', base);
		this.dependencies.draw.create('needle', base);
		this.dependencies.draw.create('center', base);
		this.dependencies.draw.create('text', base);
		this.dependencies.draw.create('marks', base);
	}

	animateTo(targetValue: number) {
		if (!this.state.isRenderedBase) {
			this.draw(targetValue);
			this.state.isRenderedBase = true;
		}

		const animate = () => {
			const diff = targetValue - this.state.currentValue;

			if (Math.abs(diff) > 0.1) {
				this.state.currentValue += diff * 0.08;
				this.#animateDraw(this.state.currentValue);
				this.state.animationFrame = requestAnimationFrame(animate);
			} else {
				this.state.currentValue = targetValue;
				this.#animateDraw(this.state.currentValue);
			}
		};

		this.stop();
		animate();
	}

	stop() {
		if (this.state.animationFrame) cancelAnimationFrame(this.state.animationFrame);
	}

	update(value: number, max: number, size: number, theme: EThemeApp) {
		this.state = {
			isUpdate: true,
			isRenderedBase: false,
			currentValue: value,
			animationFrame: this.state.animationFrame,
		}

		this.options = {
			...this.options,
			size: size,
			max: max,
			theme: theme,
		}

		this.draw(value);
	}
}