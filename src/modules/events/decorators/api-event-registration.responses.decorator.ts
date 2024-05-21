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
    ApiTags('Gestão de eventos'),
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
      description:
        'Registro duplicado: Key (field)=(description_field) already exists.',
    }),
    ApiNotFoundResponse({
      description: 'Evento não encontrado',
    }),
    ApiBadRequestResponse({
      description: 'Este evento já foi finalizado',
    }),
    ApiUnauthorizedResponse({ description: 'Usuário sem permissão' }),
    ApiInternalServerErrorResponse({
      description: 'Houve um erro interno ao processar solicitação',
    }),
  );
}
