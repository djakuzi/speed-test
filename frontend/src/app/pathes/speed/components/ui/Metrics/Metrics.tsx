import BlockStandart from "@common/components/blocks/BlockStandart/BlockStandart.block";
import type { PropsMetricsSpeedTest } from "./Metrics.props";
import { EUnitMeasurement } from "@common/types/metrics/unitMeasurement.enum";
import { useResultTest } from "@app/store/state/speedTest/hooks/resultTest.hook";
import { observer } from "mobx-react-lite";
import { UiMetrics } from "@common/components/ui/Metrics/Metrics";
import { useEffect, useState } from "react";

const MetricsSpeedTest = observer(({
	className,
}: PropsMetricsSpeedTest) => {
	const { download, ping, upload } = useResultTest();

	const [dataMetrics, setDataMetrics] = useState([
		{
			name: 'Ping',
			value: '0',
			unitMeasurement: EUnitMeasurement.MS,
		},
		{
			name: 'Download',
			value: '0',
			unitMeasurement: EUnitMeasurement.MBPS,
		},
		{
			name: 'Upload',
			value: '0',
			unitMeasurement: EUnitMeasurement.MBPS,
		}
	])

	useEffect(() => {
		setDataMetrics(
			[
				{
					name: 'Ping',
					value: ping ? String(ping) : '0',
					unitMeasurement: EUnitMeasurement.MS,
				},
				{
					name: 'Download',
					value: download ? String(download) : '0',
					unitMeasurement: EUnitMeasurement.MBPS,
				},
				{
					name: 'Upload',
					value: upload ? String(upload) : '0',
					unitMeasurement: EUnitMeasurement.MBPS,
				}
			]
		)
	}, [download, ping, upload])

	return (
		<BlockStandart className={className}>
			<UiMetrics type="col" data={dataMetrics} className="w-full max-w-[300px] gap-5" />
		</BlockStandart>
	);
})

export default MetricsSpeedTest;

