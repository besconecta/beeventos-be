import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { EventOutput } from '../output';

export function ApiUpdateEventResponses() {
  return applyDecorators(
    ApiTags('Gestão de eventos'),
    ApiOperation({ description: 'Atualização de evento' }),
    ApiParam({
      name: 'id',
      description: 'ID do evento',
      example: '5aaca898-fe80-46f7-8530-bbcb837a2f49',
    }),
    ApiOkResponse({
      description: 'Evento atualizado com sucesso',
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
    ApiConflictResponse({
      description:
        'Registro duplicado: Key (field)=(description_field) already exists.',
    }),
    ApiNotFoundResponse({ description: 'Evento não encontrado' }),
    ApiUnauthorizedResponse({ description: 'Usuário sem permissão' }),
    ApiInternalServerErrorResponse({
      description: 'Houve um erro interno ao processar solicitação',
    }),
  );
}
