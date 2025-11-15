import { useRef} from "react";

type ScrollPosition = "center" | "top" | "bottom";

interface ScrollToElementOptions {
	position?: ScrollPosition;
	offset?: number;
	behavior?: ScrollBehavior;
}

export function useScrollToElement<T extends HTMLElement>(
	options: ScrollToElementOptions = {}
) {
	const { position = "center", offset = 0, behavior = "smooth" } = options;
	const ref = useRef<T>(null);

	const scrollToElement = () => {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();
		const absoluteY = window.scrollY + rect.top;

		let targetY: number;

		switch (position) {
			case "top":
				targetY = absoluteY + offset;
				break;

			case "bottom":
				targetY = absoluteY - window.innerHeight + rect.height + offset;
				break;

			case "center":
			default:
				targetY = absoluteY - window.innerHeight / 2 + rect.height / 2 + offset;
				break;
		}

		window.scrollTo({
			top: targetY,
			behavior,
		});
	};

	return { ref, scrollToElement };
}
