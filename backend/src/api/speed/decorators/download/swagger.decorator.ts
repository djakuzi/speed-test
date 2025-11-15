import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function SwaggerDownload() {
	return applyDecorators(
		ApiOperation({
			summary: 'Скачать тестовый файл',
			description: 'Отправляет бинарный файл на клиент для измерения скорости загрузки',
			operationId: 'downloadTest',
		}),
		ApiResponse({
			status: 200,
			description: 'Файл отправлен',
			content: {
				'application/octet-stream': {
					schema: {
						format: 'binary',
						description: 'Бинарный тестовый файл',
					},
				},
			},
		}),
	);
}