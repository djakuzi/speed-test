import type { PropsBase } from "@common/props/base.props";
import type { DOMAttributes, HTMLAttributes } from "react";

export interface PropsLink extends PropsBase {
	type?: 'default';
	attr?: HTMLAttributes<HTMLButtonElement> & DOMAttributes<HTMLButtonElement>
}