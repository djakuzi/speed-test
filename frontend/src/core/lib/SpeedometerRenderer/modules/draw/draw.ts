import { ElementArc } from "./elements/arc";
import { ElementBackground } from "./elements/background";
import { ElementCenter } from "./elements/center";
import { ElementMarks } from "./elements/marks";
import { ElementNeedle } from "./elements/needle";
import { ElementText } from "./elements/text";
import type { IDrawAllOptions } from "./types";

interface IntrElements {
	needle: ElementNeedle;
	arc: ElementArc;
	background: ElementBackground;
	center: ElementCenter;
	text: ElementText;
	marks: ElementMarks;
}

type TypeKeyElements = keyof IntrElements

export class DrawElements {
	private elements: IntrElements;

	constructor() {
		this.elements = {
			needle: new ElementNeedle(),
			arc: new ElementArc(),
			background: new ElementBackground(),
			center: new ElementCenter(),
			text: new ElementText(),
			marks: new ElementMarks(),
		}
	}

	create(elements: TypeKeyElements, options: IDrawAllOptions) {
		this.elements[elements].draw(options);
	}
}