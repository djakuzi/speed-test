import type { PropsLink } from "./Button.props";
import cn from "classnames";

export default function UiButton({
	attr,
	children,
	className,
	type = "default",
}: PropsLink) {
	const _type = {
		default:`bg-kn-btn-primary 
			shadow-kn-montserrat 
			text-kn-text-white
			p-[.5em] 
			rounded-[.5em]
			text-2xl
			font-semibold
			transition-colors 
			duration-300 ease 
			hover:bg-kn-btn-surface 
			hover:text-kn-text-primary
		`,
	};

	const baseCls = "font-montserrat w-fit cursor-pointer";

	const resClassName = cn(
		baseCls,
		_type[type],
		className,
	);

	return (
		<button {...attr} className={resClassName}>
			{children}
		</button>
	);
}
