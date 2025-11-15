import { StyleDescText } from "@core/tailwindcss/modules/component/text/descTest";
import type { PropsDescText } from "./DescText.props";
import cn from 'classnames';

export default function UiDescText ({  
	className = '',
	type = 'medium',
	children
}: PropsDescText){
	const baseCls = `
		text-kn-text-secondary
		loading-[1.2]
	`;

	const resClassName = cn(
		`${baseCls} ${className}`,
		StyleDescText[type]
	);

	return (
		<div className={resClassName}>
			{children}
		</div>
	);
}

