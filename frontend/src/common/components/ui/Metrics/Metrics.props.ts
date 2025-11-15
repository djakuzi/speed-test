import type { PropsBase } from "@common/props/base.props";
import type { EUnitMeasurement } from "@common/types/metrics/unitMeasurement.enum";
import type { TStyleFlex } from "@core/tailwindcss/modules/component/position/flex";

export interface PropsMetrics extends PropsBase {
	type?: TStyleFlex,
	data: Array<
		{
			name: string;
			value: string | number;
			unitMeasurement?: EUnitMeasurement;
		}
	>,
}