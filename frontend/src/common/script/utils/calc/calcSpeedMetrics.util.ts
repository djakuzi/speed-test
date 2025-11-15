export interface ISpeedMetrics {
	bytes: number;
	seconds: number;
	bits: number;
	kbps: number;
	mbps: number;
	ms: number;
}
/**
 * @returns Рассчитывает метрики скорости передачи данных
 * @param bytes - Количество загруженных/отправленных байт
 * @param seconds - Время в секундах
 * @param bits - Количество бит (байты * 8)
 * @param kbps - Килобиты в секунду
 * @param mbps - Мегабиты в секунду
 * @param ms - Время в миллисекундах
 */
export function calcSpeedMetrics(bytes: number, start: number, end: number): ISpeedMetrics {
	const ms = end - start;

	if (ms <= 0) {
		return {
			bytes,
			seconds: 0,
			bits: 0,
			kbps: 0,
			mbps: 0,
			ms: 0,
		};
	}

	const seconds = ms / 1000;
	const bits = bytes * 8;
	const kbps = bits / seconds / 1024;
	const mbps = kbps / 1024;

	return {
		bytes,
		seconds,
		bits,
		kbps: Number(kbps.toFixed(0)),
		mbps: Number(mbps.toFixed(0)),
		ms: Number(ms.toFixed(0)),
	};
}
