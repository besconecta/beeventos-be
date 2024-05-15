import { applyDecorators } from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

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
