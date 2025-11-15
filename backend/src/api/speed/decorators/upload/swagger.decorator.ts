import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiConsumes, ApiBody, ApiResponse } from '@nestjs/swagger';

export function SwaggerUpload() {
	return applyDecorators(
		ApiOperation({
			summary: 'Загрузить тестовый файл',
			description: 'Получает бинарный тестовый файл от клиента для измерения скорости отправки',
		}),
		ApiConsumes('application/octet-stream'),
		ApiBody({
			description: 'Бинарный файл',
			schema: {
				type: 'string',
				format: 'binary',
			},
		}),
		ApiResponse({
			status: 200,
			description: 'Файл успешно получен',
			schema: {
				example: {
					success: true,
					mbps: 20,
				},
			},
		}),
	);
}
