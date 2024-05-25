import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import {
  ConflictErrorOutput,
  InternalServerErrorOutput,
  UnauthorizedErrorOutput,
} from '../../../shared/exceptions/output';
import { CreateEventOutput } from '../output';

export function ApiCreateEventResponses() {
  return applyDecorators(
    ApiTags('Gestão de eventos'),
    ApiOperation({ description: 'Cadastro evento' }),
    ApiCreatedResponse({
      description: 'Evento criado com sucesso',
      type: CreateEventOutput,
    }),

    ApiBadRequestResponse({
      description: 'Erros de validação',
      schema: {
        type: 'object',
        properties: {
          statusCode: { type: 'number', example: 400 },
          timestamp: { type: 'date', example: '14:00:00 PM' },
          message: {
            type: 'string',
            example: [
              'ID do tipo de evento é obrigatório',
              'ID do evento com formato inválido',
              'ID do usuário é obrigatório',
              'Título do evento é obrigatório',
              'Título do evento deve conter no máximo 100 caracteres',
              'Descrição do evento é obrigatória',
              'Local do evento é obrigatório',
              'Status do evento deve ser: idle, started ou finished',
            ],
          },
          route: {
            type: 'string',
            example:
              'http://domain.com/api/v1/events/a386818e-90af-4b07-bd5d-52e21d2fb158',
          },
        },
      },
    }),

    ApiNotFoundResponse({
      description: 'Registros não encontrados',
      schema: {
        type: 'object',
        properties: {
          statusCode: { type: 'number', example: 404 },
          timestamp: { type: 'date', example: '14:00:00 PM' },
          message: {
            type: 'string',
            example: [
              'Usuário não encontrado',
              'Tipo de evento não encontrado',
            ],
          },
        },
      },
    }),

    ApiConflictResponse({
      description: 'Registro duplicado',
      type: ConflictErrorOutput,
    }),

    ApiUnauthorizedResponse({
      description: 'Acesso negado',
      type: UnauthorizedErrorOutput,
    }),

    ApiInternalServerErrorResponse({
      description: 'Erro interno do servidor',
      type: InternalServerErrorOutput,
    }),
  );
}
