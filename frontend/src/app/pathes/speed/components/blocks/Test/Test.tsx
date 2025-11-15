import BlockStandart from "@common/components/blocks/BlockStandart/BlockStandart.block";
import Speedometer from "../../ui/Speedometer/Speedometer";
import { useResultTest } from "@app/store/state/speedTest/hooks/resultTest.hook";
import MetricsSpeedTest from "../../ui/Metrics/Metrics";

export function BlockTest() {
	const { startTest } = useResultTest();

	return (
		<BlockStandart type={'around-center'}>
			<Speedometer onStart={startTest} className="w-full max-w-1/2" />
			<MetricsSpeedTest className="w-full max-w-[300px] gap-5" />
		</BlockStandart>
	);
}