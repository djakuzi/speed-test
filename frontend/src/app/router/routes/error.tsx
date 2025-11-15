import LayoutError from "@app/layouts/error/error";
import PatPageNotFound from "@app/pathes/pageNotFound/pageNotFound";
import type { RouteObject } from "react-router-dom";

export const ROUTE_ERROR: RouteObject = {
	path: "*",
	element: <LayoutError />,
	children: [
		{
			path: '*',
			element: < PatPageNotFound />
		}
	]
}

