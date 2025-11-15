import { useContext } from "react";
import { StoreContext, type AppStore } from "../store";

export function useStateStore<K extends keyof AppStore["state"]>(
	key: K
): AppStore["state"][K] {
	const store = useContext(StoreContext);
	return store.state[key];
}