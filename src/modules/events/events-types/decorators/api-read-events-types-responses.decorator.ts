import { applyDecorators } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { EventTypeOutput } from '../output';

export function ApiReadEventsTypesResponses() {
  return applyDecorators(
    ApiTags('Gestão de eventos'),
    ApiOperation({ description: 'Listar tipos de eventos' }),
    ApiOkResponse({
      description: 'Tipos de eventos carregados com sucesso',
      type: [EventTypeOutput],
    }),
    ApiNoContentResponse({
      description: 'Não há tipos de eventos cadastrados',
    }),
    ApiUnauthorizedResponse({ description: 'Usuário sem permissão' }),
    ApiInternalServerErrorResponse({
      description: 'Erro interno do servidor',
      content: {
        type: { example: 'Houve um erro interno ao processar solicitação' },
      },
    }),
  );
}
