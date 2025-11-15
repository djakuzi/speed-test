import type { AppStore } from "@app/store/store";
import { CONFIG_STORE_MOB_X } from "@core/config/storeMobx.config";
import { EThemeApp } from "@core/config/types/app.interface";
import { makeAutoObservable } from "mobx";
import { actions, type TActions } from "./action/action";

export class StateTheme {
	root: AppStore;
	theme: EThemeApp = EThemeApp.LIGHT;

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