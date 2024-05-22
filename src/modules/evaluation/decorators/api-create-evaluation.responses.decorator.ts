import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

export function ApiCreateEvaluationResponses() {
  return applyDecorators(
    ApiTags('Avaliação de evento'),
    ApiOperation({ description: 'Avaliar um evento' }),
    ApiParam({
      name: 'id',
      description: 'ID do evento',
      example: '65c02e73-0df2-4eb9-9fdf-4442f0219c96',
    }),
    ApiCreatedResponse({
      description: 'Avaliação realizada com sucesso',
    }),
    ApiConflictResponse({
      description: 'Participante já avaliou este evento',
    }),
    ApiNotFoundResponse({
      description: 'Registros não encontrados',
      schema: {
        example: ['Participante não encontrado', 'Evento não encontrado'],
      },
    }),
    ApiBadRequestResponse({
      description: 'Este evento ainda não foi finalizado',
    }),
    ApiUnauthorizedResponse({ description: 'Usuário sem permissão' }),
    ApiInternalServerErrorResponse({
      description: 'Houve um erro interno ao processar solicitação',
    }),
  );
}
