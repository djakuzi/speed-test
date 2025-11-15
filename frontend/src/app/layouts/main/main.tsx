import LayoutStandart from "@common/components/layouts/LayoutStandart/LayoutStandart.layout";
import { Outlet } from "react-router-dom";
import { Header } from "./components/blocks/Header/Header.block";
import { Links } from "./components/blocks/Links/Links.block";
import BlockStandart from "@common/components/blocks/BlockStandart/BlockStandart.block";

export default function LayoutMain() {
	return (
		<LayoutStandart>
			<Header className='mt-8' />
			<Links className="mt-12" />

			<BlockStandart className="mt-16 pb-16">
				<Outlet />
			</BlockStandart>
		</LayoutStandart>
	)
}