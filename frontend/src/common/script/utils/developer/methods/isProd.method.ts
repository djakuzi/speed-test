import { CONFIG_APP } from "@core/config/app.config";
import { EModeApp } from "@core/config/types/app.interface";

export function isModeProd() {
	return CONFIG_APP.mode === EModeApp.PROD;
}