import type { PropsBase } from "@common/props/base.props";

export interface PropsSpeedometer extends PropsBase {
	value: number;
	max?: number;
	isBlur?: boolean;
	nameValue: string;
}