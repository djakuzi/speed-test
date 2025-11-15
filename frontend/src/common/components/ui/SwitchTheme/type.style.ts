import { StyleAnimationTransform } from "@core/tailwindcss/modules/component/animation/transform";
import { StyleAbsolute } from "@core/tailwindcss/modules/component/position/absolute";

export const StyleSwitchTheme = {
	parent: {
		default: 'relative text-[16px] max-w-[6em] h-[3em] p-[.2em] bg-kn-bg-accent rounded-[2em] cursor-pointer',
	},
	circle: {
		default: `
			absolute 
			text-[2em] 
			w-full 
			max-w-[45%] 
			h-[90%] 
			bg-kn-bg-base 
			rounded-full 
			${StyleAbsolute["center-y"]} 
			${StyleAnimationTransform['translate']}
		`,
	},

}