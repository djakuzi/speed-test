import { StyleAbsolute } from "@core/tailwindcss/modules/component/position/absolute";
import type { PropsLink } from "./LoadingCircle.props";
import cn from "classnames";

export default function UiLoadingCircle({
	className,
}: PropsLink) {
	const baseCls = "w-1/4 h-1/4 aspect-square relative";

	const resClassName = cn(
		baseCls,
		className,
	);

	return (
		<div className={resClassName}>
			<div className={`bg-kn-bg-primary w-1/2 h-1/2 rounded-full aspect-square ${StyleAbsolute.center}`}></div>
			<div className={`bg-kn-bg-base w-1/3 h-1/3 rounded aspect-square rotate animate-spin ${StyleAbsolute.center}`}></div>
		</div>
	);
}
