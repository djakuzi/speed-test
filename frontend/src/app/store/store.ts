import { createContext, useContext } from "react";
import { StateTheme } from "./state/theme/state";
import { StateSpeedTest } from "./state/speedTest/state";
import { StateGeolocation } from "./state/geolocation/state";

interface IStateStoreApp {
	theme: StateTheme;
	speedTest: StateSpeedTest;
	geolocation: StateGeolocation;
}

export class AppStore {
	state: IStateStoreApp;

	constructor() {
		this.state = {
			theme: new StateTheme(this),
			speedTest: new StateSpeedTest(this),
			geolocation: new StateGeolocation(this),
		}
	}
}

export const appStore = new AppStore();
export const StoreContext = createContext<AppStore>(appStore);

export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);