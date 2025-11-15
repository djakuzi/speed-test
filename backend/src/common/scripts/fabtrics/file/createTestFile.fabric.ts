import { randomBytes } from 'crypto';
import { Buffer } from 'buffer';

export interface FileFabricOptions {
	sizeMB?: number;
	type?: string;
	name?: string;
	fillRandom?: boolean;
	fillChar?: string;
}

export function createTestFile({
	sizeMB = 5,
	type = 'application/octet-stream',
	name = 'testfile.bin',
	fillRandom = true,
	fillChar = 'a',
}: FileFabricOptions = {}): { buffer: Buffer; name: string; type: string; sizeBytes: number } {
	const sizeBytes = sizeMB * 1024 * 1024;
	let buffer: Buffer;

	if (fillRandom) {
		buffer = randomBytes(sizeBytes);
	} else {
		buffer = Buffer.alloc(sizeBytes, fillChar);
	}

	return { buffer, name, type, sizeBytes };
}
