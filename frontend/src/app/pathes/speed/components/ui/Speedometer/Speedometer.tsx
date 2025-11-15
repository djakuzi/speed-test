import BlockStandart from "@common/components/blocks/BlockStandart/BlockStandart.block";
import type { PropsSpeedometer } from "./Speedometer.props";
import { UiSpeedometer } from "@common/components/ui/Speedometer/Speedometer";
import UiButton from "@common/components/ui/Button/Button.ui";
import { StyleAbsolute } from "@core/tailwindcss/modules/component/position/absolute";
import { EUnitMeasurement } from "@common/types/metrics/unitMeasurement.enum";
import { useResultTest } from "@app/store/state/speedTest/hooks/resultTest.hook";
import { observer } from "mobx-react-lite";
import { useScrollToElement } from "@common/script/hooks/useFeature/scroll/scrollToElement.hook";

const Speedometer = observer(({
	className,
	onStart
}: PropsSpeedometer) => {
	const { download } = useResultTest();
	const { ref, scrollToElement } = useScrollToElement<HTMLDivElement>();

	function click() {
		onStart();
		scrollToElement();
	}

	return (
		<BlockStandart className={className + ' relative text'}>
			<UiSpeedometer
				value={download ? download : 0}
				isBlur={!download ? true : false}
				nameValue={EUnitMeasurement.MBPS}
			/>
			{
				!download && (
					<UiButton
						className={StyleAbsolute.center}
						attr={{
							onClick: click
						}}
					>
						НАЧАТЬ
					</UiButton>
				)
			}
			<div ref={ref} className={`opacity-0 ${StyleAbsolute.center} z-100`}></div>
		</BlockStandart>
	);
})

export default Speedometer;

