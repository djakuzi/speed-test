import LayoutStandart from "@common/components/layouts/LayoutStandart/LayoutStandart.layout";
import { Outlet } from "react-router-dom";

export default function LayoutError() {
	return (
		<LayoutStandart className={"min-h-full"}>
			<Outlet />
		</LayoutStandart>
	)
}