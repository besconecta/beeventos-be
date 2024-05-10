import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { UserAccountOutput } from '../output';

export function ApiCreateUserResponses() {
  return applyDecorators(
    ApiOperation({
      description: 'Cria conta de usuário organizador de eventos',
    }),
    ApiCreatedResponse({
      description: 'Conta de usuário criada com sucesso',
      type: UserAccountOutput,
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
