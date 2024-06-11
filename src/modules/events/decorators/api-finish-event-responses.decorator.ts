import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { EventOutput } from '../output';

export function ApiFinishEventResponses() {
  return applyDecorators(
    ApiTags('Gestão de eventos'),
    ApiOperation({ description: 'Finalizar evento' }),
    ApiParam({
      name: 'id',
      description: 'ID do evento',
      example: '5aaca898-fe80-46f7-8530-bbcb837a2f49',
    }),
    ApiOkResponse({
      description: 'Evento finalizado com sucesso',
      type: EventOutput,
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
              'ID de evento com formato inválido',
              'Este evento já foi finalizado',
            ],
          },
          route: {
            type: 'string',
            example:
              'http://domain.com/api/v1/events/a386818e-90af-4b07-bd5d-52e21d2fb158',
          },
        },
      },
    }),
    ApiNotFoundResponse({ description: 'Evento não encontrado' }),
    ApiUnauthorizedResponse({ description: 'Usuário sem permissão' }),
    ApiInternalServerErrorResponse({
      description: 'Erro interno do servidor',
      content: {
        type: { example: 'Houve um erro interno ao processar solicitação' },
      },
    }),
  );
}
