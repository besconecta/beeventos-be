import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { ExceptionsOutput } from '../../../shared/output';
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
    ApiBadRequestResponse({
      description: 'As senhas não coincidem',
      type: ExceptionsOutput,
    }),
    ApiConflictResponse({
      description: 'Registro duplicado',
      type: ExceptionsOutput,
    }),
    ApiInternalServerErrorResponse({
      description: 'Erro interno do servidor',
      type: ExceptionsOutput,
    }),
  );
}
