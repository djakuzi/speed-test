import type { PropsBase } from "@common/props/base.props";
import type { TStyleFlex } from "@core/tailwindcss/modules/component/position/flex";
import type { ReactNode, RefObject } from "react";

export interface PropsBlockStandart extends PropsBase {
	ref?: RefObject<HTMLDivElement | null>;
	children?: ReactNode;
	type?: TStyleFlex;
	text?: string;
}