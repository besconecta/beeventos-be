import { applyDecorators } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export function ApiDeleteEventTypeResponses() {
  return applyDecorators(
    ApiTags('Gestão de eventos'),
    ApiOperation({ description: 'Exclusão de tipos de eventos' }),
    ApiParam({
      name: 'id',
      description: 'ID do tipo de evento',
      example: 'c9363743-e4c0-4f14-b3d2-d09117020e3e',
    }),
    ApiOkResponse({
      description: 'Tipo de evento excluído com sucesso',
    }),
    ApiNoContentResponse({
      description: 'Tipo de evento não excluído',
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
