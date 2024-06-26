import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { UserAccountOutput } from '../output';

export function ApiCreateUserResponses() {
  return applyDecorators(
    ApiTags('Organizadores'),
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
      description: 'Erro interno do servidor',
      content: {
        type: { example: 'Houve um erro interno ao processar solicitação' },
      },
    }),
  );
}
