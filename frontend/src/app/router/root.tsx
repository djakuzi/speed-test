import {Root} from "@app/root/root";
import { Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import { ROUTE_MAIN } from "./routes/main";
import { ROUTE_ERROR } from "./routes/error";

export const ROUTER_ROOT: RouteObject = {
	path: "/",
	element: (
		<Suspense fallback={'Загрузка'}>
			<Root />
		</Suspense>
	),
	children: [
		ROUTE_MAIN,
		ROUTE_ERROR
	]
}
