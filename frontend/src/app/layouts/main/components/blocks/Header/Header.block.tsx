import BlockStandart from "@common/components/blocks/BlockStandart/BlockStandart.block";
import UiLogo from "@common/components/ui/Logo/Logo.ui";
import type { PropsHeader } from "./Header.props";
import {UiSwitchTheme} from "@common/components/ui/SwitchTheme/SwitchTheme";

export function Header({ className }: PropsHeader) {
	return (
		<BlockStandart type="raw-center" className={className}>
			<UiLogo className="mx-auto"/>
			<UiSwitchTheme/>
		</BlockStandart>
	)
}