import { StyleAnimationHover } from "@core/tailwindcss/modules/component/animation/hover";

export const StyleLink = {
		default: `
			pb-[4px]
			text-kn-text-base 
			${StyleAnimationHover.default}
			border-b-[3px]
			border-transparent
		`,
}

export const StyleLinkActive = {
	default: `
		!border-kn-border-base
		opacity-50
	`,
}