import axios from "axios";

export class ErrorApi extends Error {
	constructor(error: unknown) {
		let errorMessage = 'Произошла неизвестная ошибка';

		if (axios.isAxiosError(error)) {
			errorMessage = error.response?.data?.message;
		}

		if (error instanceof Error) {
			errorMessage = error.message;
		}

		super(errorMessage);
		this.name = 'ErrorApi';
	}
}