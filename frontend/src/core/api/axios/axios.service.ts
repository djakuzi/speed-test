import type { AxiosInstance } from "axios";
import { apiAxios } from "./axios";

class CoreServiceApiAxios {
	settings: {
		nameController: string;
	};
	apiClient: AxiosInstance;
	endPoints: Record<string, string>;

	constructor(nameController: string) {

		this.settings = {
			nameController,
		};

		this.apiClient = apiAxios;

		this.endPoints = {};
	}
}

export default CoreServiceApiAxios;
