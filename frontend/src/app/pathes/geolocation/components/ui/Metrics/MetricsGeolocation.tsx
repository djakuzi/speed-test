import BlockStandart from "@common/components/blocks/BlockStandart/BlockStandart.block";
import type { PropsMetricsGeolocation } from "./MetricsGeolocation.props";
import { observer } from "mobx-react-lite";
import { UiMetrics } from "@common/components/ui/Metrics/Metrics";
import { useResultGeolocation } from "@app/store/state/geolocation/hooks/resultGeolocation.hook";
import UiTitle from "@common/components/ui/Title/Title";
import BlockLoading from "@common/components/blocks/BlockLoading/BlockLoading.block";

const MetricsGeolocation = observer(({
	className,
}: PropsMetricsGeolocation) => {
	const { error, isLoading, parseGeo } = useResultGeolocation();

	if (error) {
		return (
			<BlockStandart>
				<UiTitle>Ошибка: {error}</UiTitle>
			</BlockStandart>
		)
	}

	if (isLoading) {
		return (
			<BlockStandart>
				<BlockLoading />
			</BlockStandart>
		)
	}

	if (parseGeo === null) {
		return (
			<BlockStandart>
				<UiTitle>Что-то пошло не так</UiTitle>
			</BlockStandart>
		)
	}

	function renderMetrics() {
		if (!parseGeo) {
			return null;
		}

		return parseGeo.map((section, i) => {
			return (
				<BlockStandart type="col" className="gap-10" key={`geo-section-${i}`}>
					<UiTitle
						type="medium"
						key={section.title + i + 'title'}
					>
						{section.title}
					</UiTitle>
					<UiMetrics
						key={section.title + i}
						data={section.values}
						type="raw-wrap"
						className="mb-5 gap-5"
					/>
				</BlockStandart>
			)
		});
	}

	return (
		<BlockStandart type="col" className="w-full gap-10">
			{parseGeo && renderMetrics()}
		</BlockStandart>
	);
})

export default MetricsGeolocation;

