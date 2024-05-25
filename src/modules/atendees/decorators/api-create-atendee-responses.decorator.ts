import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';

import {
  ConflictErrorOutput,
  InternalServerErrorOutput,
} from '../../../shared/exceptions/output';
import { AtendeeAccountOutput } from '../output';

export function ApiCreateAtendeeResponses() {
  return applyDecorators(
    ApiTags('Participantes'),
    ApiOperation({
      description: 'Cria conta de participante organizador de eventos',
    }),
    ApiCreatedResponse({
      description: 'Conta de participante criada com sucesso',
      schema: {
        type: 'object',
        properties: {
          data: {
            oneOf: [{ $ref: getSchemaPath(AtendeeAccountOutput) }],
          },
        },
      },
    }),
    ApiBadRequestResponse({
      description: 'Erro de validação de senha',
      schema: {
        type: 'object',
        properties: {
          statusCode: { type: 'number', example: 409 },
          timestamp: { type: 'date', example: '14:00:00 PM' },
          message: {
            type: 'string',
            example: 'As senhas não coincidem',
          },
        },
      },
    }),
    ApiConflictResponse({
      description: 'Registro duplicado',
      type: ConflictErrorOutput,
    }),

    ApiInternalServerErrorResponse({
      description: 'Erro interno do servidor',
      type: InternalServerErrorOutput,
    }),
  );
}
