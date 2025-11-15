
import { StyleFlex } from "@core/tailwindcss/modules/component/position/flex";
import type { PropsBlockStandart } from "./BlockLoading.props";
import cn from 'classnames';
import UiTitle from "@common/components/ui/Title/Title";
import UiLoadingCircle from "@common/components/ui/LoadingCircle/LoadingCircle";

export default function BlockLoading({ 
	ref, 
	children, 
	className, 
	type = 'col-center',
	text = 'Загружаем...'
}: PropsBlockStandart) {
	const baseCls = `
		w-full
	`;

	const resClassName = cn(className ? className : baseCls, StyleFlex[type]);

	return (
		<div ref={ref} className={resClassName}>
			<UiLoadingCircle />
			<UiTitle type='medium' className="animate-pulse">
				{text}
			</UiTitle>
			{children}
		</div>
	)
}