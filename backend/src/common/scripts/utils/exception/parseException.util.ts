import { parseMessage } from "../parse/parseMesage.util";
import { parseStatus } from "../parse/parseStatus.util";


export function parseException(exception: unknown) {
	return {
		status: parseStatus(exception),
		message: parseMessage(exception),
	}
}