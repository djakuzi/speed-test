export function calcPing(start: number, end: number) {
	const ms = end - start;
	return Number(ms.toFixed(0));
}
