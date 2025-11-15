import type { ReactNode } from "react";

export interface PropsBase {
	className?: string;
	children?: ReactNode;
	addedDefaultClass?: boolean;
}