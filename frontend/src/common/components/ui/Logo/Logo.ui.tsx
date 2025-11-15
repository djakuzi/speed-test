import type { PropsLogo } from "./Logo.props";
import cn from 'classnames';
import { ApaptiveDescText } from "./Logo.style";

export default function UiLogo({
	adaptive = 'standart',
	className 
}: PropsLogo) {

	const baseCls = `
		font-montserrat
		w-fit
	`

	const resClassName = cn(baseCls, ApaptiveDescText[adaptive], className);

	return (
		<div className={resClassName}
		>
			<div className="
					font-montserrat
					font-extrabold
					text-[5em]
					text-kn-text-primary
					leading-none
				"
			>
				KnowNet
			</div>
			<div className="
					font-montserrat
					text-[1.75em]
					text-right
					text-kn-text-accent
					leading-none
				"
			>
				by djakuzi
			</div>
		</div>
	)
}