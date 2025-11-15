import { useStateStore } from "@app/store/hooks/useStateStore.hooks";
import BlockStandart from "@common/components/blocks/BlockStandart/BlockStandart.block";
import { useRenderSpeedometer } from "@common/script/hooks/useUi/render/renderSpeedometer.hook";
import type { PropsSpeedometer } from "./Speedometer.props";
import cn from 'classnames';
import { observer } from "mobx-react-lite";

export const UiSpeedometer = observer(({ 
	value, 
	max = 1000,
	nameValue,
	isBlur = false, 
	addedDefaultClass, 
	className = ''
}: PropsSpeedometer) => {
	const state = useStateStore('theme');
	const {parentRef, canvasRef, size} = useRenderSpeedometer<HTMLDivElement>(value, max, state.theme, nameValue);

	const baseCls = `
		w-full
	`;

	const resClassName = cn(
		"flex flex-col items-center justify-center",
		isBlur ? 'blur-[3px]' : '',
		className && !addedDefaultClass ? className : baseCls,
		addedDefaultClass && `${baseCls} ${className}`
	);

	return (
		<BlockStandart ref={parentRef} className={resClassName}>
			<canvas ref={canvasRef} width={size} height={size} />
		</BlockStandart>
	);
})

