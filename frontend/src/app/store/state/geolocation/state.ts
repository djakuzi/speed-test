import type { AppStore } from "@app/store/store";
import { CONFIG_STORE_MOB_X } from "@core/config/storeMobx.config";
import { makeAutoObservable } from "mobx";
import type { IGeoLocation } from "@common/api/services/Geolocation/types/models/geolocation.interface";
import { actions, type TActions } from "./action/action";
import { parseGeo } from "./computed/parseGeo";

export class StateGeolocation {
	root: AppStore;

	error: string | null = null;
	isLoading: boolean = false;
	geo: IGeoLocation | null = null;

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

	get parseGeo() {
		return parseGeo(this.geo);
	}
}