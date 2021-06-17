import axios from "axios";

export const axs = axios.create({
	baseURL: "https://api.siplah.anugrahmal.id/v1",
	timeout: 30000
});
export function execute() {
	axs.interceptors.request.use(
		config => {
			const token = window.localStorage.getItem("token");
			if (token) {
				config.headers["Authorization"] = token;
			}
			return config;
		},
		error => {
			return Promise.reject(error);
		}
	);
	axs.interceptors.response.use(
		config => {
			const token = window.localStorage.getItem("token");
			if (token) {
				config.headers["Authorization"] = token;
			}
			return config;
		},
		error => {
			return Promise.reject(error);
		}
	);
}
