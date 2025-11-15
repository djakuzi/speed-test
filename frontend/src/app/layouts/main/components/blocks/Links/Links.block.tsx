import BlockStandart from "@common/components/blocks/BlockStandart/BlockStandart.block";

import type { PropsLinks } from "./Links.props";
import Link from "@common/components/ui/Link/Link";

export function Links({ className }: PropsLinks) {
	return (
		<BlockStandart type="col" className={className}>
			<BlockStandart type="flex" className={'gap-5'}>
				<Link to='/'>{'Скорость интернета'}</Link>
				<Link to='/geolocation'>{'Геологация'}</Link>
			</BlockStandart>
		</BlockStandart>
	)
}