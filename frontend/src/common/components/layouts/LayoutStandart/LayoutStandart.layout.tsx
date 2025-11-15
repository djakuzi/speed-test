import type { PropsLayoutStandart } from "./LayoutStandart.props";

export default function LayoutStandart({children, className =''}: PropsLayoutStandart) {
	return (
		<div className={`container mx-auto bg px-[16px] ${className}`}>
			{children}
		</div>
	)
}