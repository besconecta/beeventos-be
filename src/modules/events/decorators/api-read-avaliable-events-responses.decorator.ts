import { applyDecorators } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { EventOutput } from '../output';

export function ApiReadAvaliableEventsResponses() {
  return applyDecorators(
    ApiTags('Gestão de eventos'),
    ApiQuery({
      name: 'title',
      description: 'Título do evento',
      type: 'string',
      required: false,
    }),
    ApiQuery({
      name: 'local',
      description: 'Local do evento',
      type: 'string',
      required: false,
    }),
    ApiQuery({
      name: 'type',
      description: 'Tipo do evento',
      type: 'string',
      required: false,
    }),
    ApiQuery({
      name: 'startAt',
      description: 'Data de início do evento',
      type: 'date',
      required: false,
    }),
    ApiQuery({
      name: 'endAt',
      description: 'Data do fim do evento',
      type: 'date',
      required: false,
    }),
    ApiOperation({
      description: 'Listar todos os eventos com opções de filtro',
    }),
    ApiOkResponse({
      description: 'Eventos listados com sucesso',
      type: [EventOutput],
    }),
    ApiNoContentResponse({}),
    ApiInternalServerErrorResponse({
      description: 'Houve um erro interno ao processar solicitação',
    }),
  );
}
