import { StyleTitle } from "@core/tailwindcss/modules/component/text/title";
import type { PropsTitle } from "./Title.props";
import cn from 'classnames';

export default function UiTitle({  
	className = '',
	type = 'big',
	children
}: PropsTitle) {
	const baseCls = `
		text-kn-text-base
		loading-[1.2]
		tracking-tight/normal
		font-bold
	`;

	const resClassName = cn(
		`${baseCls} ${className}`,
		StyleTitle[type]
	);

	return (
		<div className={resClassName}>
			{children}
		</div>
	);
}

