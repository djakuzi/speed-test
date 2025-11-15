import { StyleFlex } from "@core/tailwindcss/modules/component/position/flex";
import type { PropsBlockStandart } from "./BlockStandart.props";
import cn from 'classnames';

export default function BlockStandart({ ref, children, className, type = 'default' }: PropsBlockStandart) {
	const baseCls = `
		w-full
	`;

	const resClassName = cn(className ? className : baseCls, StyleFlex[type]);

	return (
		<div ref={ref} className={resClassName}>
			{children}
		</div>
	)
}