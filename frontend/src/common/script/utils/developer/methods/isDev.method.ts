import { CONFIG_APP } from "@core/config/app.config";
import { EModeApp } from "@core/config/types/app.interface";

export function isModeDev() {
	return CONFIG_APP.mode === EModeApp.DEV;
}