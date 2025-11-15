export interface IFileOptions {
	sizeMB?: number;
	type?: string;
	name?: string;
}

export function createTestFile({
	sizeMB = 5,
	type = "application/octet-stream",
	name = "testfile.bin",
}: IFileOptions = {}): { blob: Blob; name: string } {
	const sizeBytes = sizeMB * 1024 * 1024;
	const buffer = new ArrayBuffer(sizeBytes);
	const view = new Uint8Array(buffer);

	const chunkSize = 64 * 1024;
	for (let i = 0; i < sizeBytes; i += chunkSize) {
		const end = Math.min(i + chunkSize, sizeBytes);
		const chunk = view.subarray(i, end);
		crypto.getRandomValues(chunk);
	}

	const blob = new Blob([buffer], { type });
	return { blob, name };
}