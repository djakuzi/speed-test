import { CONFIG_API } from "@core/config/api.config";
import type { AxiosInstance } from "axios";
import axios from "axios";

export const apiAxios: AxiosInstance = axios.create({
	baseURL: CONFIG_API.host + ":" + CONFIG_API.port,
	withCredentials: true,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
});