import { applyDecorators } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { EventOutput } from '../output';

export function ApiReadEventsResponses() {
  return applyDecorators(
    ApiTags('Gestão de eventos'),
    ApiOperation({ description: 'Listar todos os eventos' }),
    ApiCreatedResponse({
      description: 'Eventos listados com sucesso',
      type: [EventOutput],
    }),
    ApiNoContentResponse({}),
    ApiInternalServerErrorResponse({
      description: 'Houve um erro interno ao processar solicitação',
    }),
  );
}
