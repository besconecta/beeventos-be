import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { AtendeeAccountOutput } from '../output';

export function ApiCreateAtendeeResponses() {
  return applyDecorators(
    ApiTags('Participantes'),
    ApiOperation({
      description: 'Cria conta de participante organizador de eventos',
    }),
    ApiCreatedResponse({
      description: 'Conta de participante criada com sucesso',
      type: AtendeeAccountOutput,
    }),
    ApiBadRequestResponse({ description: 'As senhas não coincidem' }),
    ApiConflictResponse({
      description:
        'Registro duplicado: Key (field)=(description_field) already exists.',
    }),
    ApiInternalServerErrorResponse({
      description: 'Houve um erro interno ao processar solicitação',
    }),
  );
}
