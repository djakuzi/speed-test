import { useStateStore } from "@app/store/hooks/useStateStore.hooks";
import type { PropsSpeedometer } from "./SwitchTheme.props";
import cn from 'classnames';
import { EThemeApp } from "@core/config/types/app.interface";
import { StyleSwitchTheme } from "./type.style";
import { isDarkTheme } from "@common/script/utils/theme/methods/isDarkTheme";
import { observer } from "mobx-react-lite";

export const UiSwitchTheme = observer(({  
	className = '',
	type = 'default',
}: PropsSpeedometer) => {
	const theme = useStateStore('theme');

	const baseCls = `
		w-full
	`;

	const resClassName = cn(
		`${baseCls} ${className}`,
		StyleSwitchTheme.parent[type]
	);

	function changeTheme() {
		const changeTheme = theme.theme === EThemeApp.DARK ? EThemeApp.LIGHT : EThemeApp.DARK;

		theme.actions.changeTheme(changeTheme);
	}

	return (
		<div className={resClassName + ' '} onClick={changeTheme}>
			<div className={StyleSwitchTheme.circle[type] + (isDarkTheme() ? ' translate-x-[113%]' : ' ')}>
			</div>
		</div>
	);
})

