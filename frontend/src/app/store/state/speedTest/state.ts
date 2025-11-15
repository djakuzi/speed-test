import type { AppStore } from "@app/store/store";
import { CONFIG_STORE_MOB_X } from "@core/config/storeMobx.config";
import { makeAutoObservable } from "mobx";
import { actions, type TActions } from "./action/action";

export class StateSpeedTest {
	root: AppStore;

	download: number | null = null;
	ping: number | null = null;
	upload: number | null = null;

	readonly actions: TActions;

	constructor(root: AppStore) {
		makeAutoObservable(
			this, 
			{
				...CONFIG_STORE_MOB_X.annotations,
			},
			{
				...CONFIG_STORE_MOB_X.options,
			}
		)

		this.root = root;
		this.actions = actions();
	}
}