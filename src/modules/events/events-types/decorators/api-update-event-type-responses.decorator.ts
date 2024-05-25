import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export function ApiUpdateEventTypeResponses() {
  return applyDecorators(
    ApiTags('Gestão de eventos'),
    ApiOperation({ description: 'Atualização de tipos de eventos' }),
    ApiParam({
      name: 'id',
      description: 'ID do tipo de evento',
      example: 'c9363743-e4c0-4f14-b3d2-d09117020e3e',
    }),
    ApiOkResponse({
      description: 'Tipo de evento atualizado com sucesso',
    }),
    ApiNoContentResponse({
      description: 'Tipo de evento não atualizado',
    }),
    ApiConflictResponse({
      description:
        'Registro duplicado: Key (field)=(description_field) already exists.',
    }),
    ApiBadRequestResponse({ description: 'Os campos não podem ser vazios' }),
    ApiUnauthorizedResponse({ description: 'Usuário sem permissão' }),
    ApiInternalServerErrorResponse({
      description: 'Erro interno do servidor',
      content: {
        type: { example: 'Houve um erro interno ao processar solicitação' },
      },
    }),
  );
}
