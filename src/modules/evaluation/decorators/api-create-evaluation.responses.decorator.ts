import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import {
  ConflictErrorOutput,
  InternalServerErrorOutput,
  UnauthorizedErrorOutput,
} from '../../../shared/exceptions/output';

export function ApiCreateEvaluationResponses() {
  return applyDecorators(
    ApiTags('Avaliação de evento'),
    ApiOperation({ description: 'Avaliar um evento' }),
    ApiParam({
      name: 'id',
      description: 'ID do evento',
      example: '65c02e73-0df2-4eb9-9fdf-4442f0219c96',
    }),
    ApiCreatedResponse({
      description: 'Avaliação realizada com sucesso',
    }),

    ApiNotFoundResponse({
      description: 'Registros não encontrados',
      schema: {
        type: 'object',
        properties: {
          statusCode: { type: 'number', example: 404 },
          timestamp: { type: 'date', example: '14:00:00 PM' },
          message: {
            type: 'string',
            example: ['Participante não encontrado', 'Evento não encontrado'],
          },
        },
      },
    }),
    ApiBadRequestResponse({
      description: 'Erros de validação',
      schema: {
        type: 'object',
        properties: {
          statusCode: { type: 'number', example: 400 },
          timestamp: { type: 'date', example: '14:00:00 PM' },
          message: {
            type: 'string',
            example: [
              'Este evento ainda não foi finalizado, Informe o ID do participante ou crie uma avaliação anônima',
              'ID do participante não é necessário para criar uma avaliação anônima',
              'Este evento ainda não foi finalizado',
            ],
          },
        },
      },
    }),
    ApiUnauthorizedResponse({
      description: 'Acesso negado',
      type: UnauthorizedErrorOutput,
    }),

    ApiConflictResponse({
      description: 'Participante já avaliou este evento',
      type: ConflictErrorOutput,
    }),

    ApiInternalServerErrorResponse({
      description: 'Erro interno do servidor',
      type: InternalServerErrorOutput,
    }),
  );
}
