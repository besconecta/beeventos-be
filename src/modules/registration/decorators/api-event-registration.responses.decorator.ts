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

export function ApiEventRegistrationResponses() {
  return applyDecorators(
    ApiTags('Inscrição em evento'),
    ApiOperation({ description: 'Registrar-se em evento' }),
    ApiParam({
      name: 'id',
      description: 'ID do evento',
      example: '65c02e73-0df2-4eb9-9fdf-4442f0219c96',
    }),
    ApiCreatedResponse({
      description: 'Inscrição realizada com sucesso',
    }),
    ApiConflictResponse({
      description: 'Participante já está registrado para este evento',
    }),
    ApiNotFoundResponse({
      description: 'Registros não encontrados',
      schema: {
        example: ['Participante não encontrado', 'Evento não encontrado'],
      },
    }),
    ApiBadRequestResponse({
      description: 'Este evento já foi finalizado',
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
