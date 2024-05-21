import { applyDecorators } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { PageDto } from '../../../shared/pagination';
import { EventOutput } from '../output';

export function ApiReadEventsResponses() {
  return applyDecorators(
    ApiTags('Gestão de eventos'),
    ApiOperation({ description: 'Listar todos os eventos' }),
    ApiOkResponse({
      description: 'Eventos listados com sucesso',
      type: [PageDto<EventOutput>],
    }),
    ApiNoContentResponse({}),
    ApiInternalServerErrorResponse({
      description: 'Houve um erro interno ao processar solicitação',
    }),
  );
}
