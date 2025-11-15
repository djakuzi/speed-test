import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

export function SwaggerPing() {
	return applyDecorators(
		ApiOperation({
			summary: 'Тест пинга',
			description: 'Быстрый тест задержки сети',
		}),
		ApiResponse({
			status: 200,
			description: 'Успешный ответ пинга',
			schema: {
				example: {
					success: true,
				},
			},
		}),
	);
}