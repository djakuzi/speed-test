
import LayoutMain from "@app/layouts/main/main";
import BlockLoading from "@common/components/blocks/BlockLoading/BlockLoading.block";
import { lazy, Suspense } from "react";
import type { RouteObject } from "react-router-dom";
const PathSpeed = lazy(() => import("@app/pathes/speed/Speed"));
const PathGeolocation = lazy(() => import("@app/pathes/geolocation/Geolocation"));

export const ROUTE_MAIN: RouteObject = {
	path: "/",
	element: (<LayoutMain />),
	children: [
		{
			path: '/',
			element: (
				<Suspense fallback={<BlockLoading />}>
					<PathSpeed />
				</Suspense>
			),
		},
		{
			path: '/geolocation',
			element: (
				<Suspense fallback={<BlockLoading />}>
					<PathGeolocation />
				</Suspense>
			),
		}
	]
}
