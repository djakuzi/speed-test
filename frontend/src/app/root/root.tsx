import { useStateStore } from "@app/store/hooks/useStateStore.hooks";
import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";

export const Root = observer(() => {
	const state = useStateStore('theme');

	return (
		<div className="w-full min-h-full bg-kn-bg-base" id="root-app" data-theme={state.theme}>
			<Outlet />
		</div>
	)
})