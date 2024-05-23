import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { EventOutput } from '../output';

export function ApiReadEventByIdResponses() {
  return applyDecorators(
    ApiTags('Gestão de eventos'),
    ApiOperation({ description: 'Lista evento por ID' }),
    ApiParam({
      name: 'id',
      description: 'ID do evento',
      example: '5aaca898-fe80-46f7-8530-bbcb837a2f49',
    }),
    ApiOkResponse({
      description: 'Evento listado com sucesso',
      type: EventOutput,
    }),
    ApiBadRequestResponse({
      description: 'Parâmetro inválido',
      content: {
        type: {
          example: 'ID de evento com formato inválido',
        },
      },
    }),
    ApiNotFoundResponse({ description: 'Evento não encontrado ' }),
    ApiInternalServerErrorResponse({
      description: 'Houve um erro interno ao processar solicitação',
    }),
  );
}
