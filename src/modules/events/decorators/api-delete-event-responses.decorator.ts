import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import {
  InternalServerErrorOutput,
  UnauthorizedErrorOutput,
} from '../../../shared/exceptions/output';

export function ApiDeleteEventResponses() {
  return applyDecorators(
    ApiTags('Gestão de eventos'),
    ApiOperation({ description: 'Exclusão de evento' }),
    ApiParam({
      name: 'id',
      description: 'ID do evento',
      example: '5aaca898-fe80-46f7-8530-bbcb837a2f49',
    }),
    ApiNoContentResponse({
      description: 'Evento excluído com sucesso',
    }),
    ApiBadRequestResponse({
      description: 'Parâmetro inválido',
      content: {
        type: {
          example: 'ID de evento com formato inválido',
        },
      },
    }),
    ApiNotFoundResponse({
      description: 'Evento não encontrado',
      content: {
        type: {
          example:
            'Evento com id 5aaca898-fe80-46f7-8530-bbcb837a2f49 não encontrado',
        },
      },
    }),
    ApiUnauthorizedResponse({
      description: 'Acesso negado',
      type: UnauthorizedErrorOutput,
    }),

    ApiInternalServerErrorResponse({
      description: 'Erro interno do servidor',
      type: InternalServerErrorOutput,
    }),
  );
}
