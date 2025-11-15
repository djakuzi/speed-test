import { ServiceSpeed } from "@common/api/services/Speed/speed.service";
import { useStateStore } from "../../../hooks/useStateStore.hooks"
import { useRef } from "react";

export function useResultTest() {
	const { download, upload, ping, actions } = useStateStore('speedTest');
	const refCountDownload = useRef(0);

	async function startTest() {
		try {
			await startDownload();

			if (refCountDownload.current < 5) {
				refCountDownload.current += 1;
				startTest()
				return;
			}

			startUpload();
			startPing();
		} catch (error) {
			console.error(error);
		}
	}

	async function startDownload() {
		const resDownload = await ServiceSpeed.getResultDownload();

		const result = {
			download: resDownload.mbps,
		}

		actions.setResultTest(result);
	}

	async function startUpload() {
		const resUpload = await ServiceSpeed.getResultUpload();

		const result = {
			upload: resUpload.mbps,
		}

		actions.setResultTest(result);
	}

	async function startPing() {
		const resPing = await ServiceSpeed.getResultPing();

		const result = {
			ping: resPing.ping
		}

		actions.setResultTest(result);
	}

	return {
		startTest,
		download,
		upload,
		ping
	}
}