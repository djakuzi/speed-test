import { CONFIG_APP } from "@core/config/app.config";
import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router-dom";
import { ROUTER_ROOT } from "./root";

const routes: RouteObject[] = [
	ROUTER_ROOT,
];

const routerOptions = {
	basename: CONFIG_APP.baseName,
};

const resRouter = createBrowserRouter(routes, routerOptions);

export function ProviderApp() {
	return <RouterProvider router={resRouter} />
}