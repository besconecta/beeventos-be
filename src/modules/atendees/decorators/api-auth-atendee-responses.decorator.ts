import { applyDecorators } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { ExceptionsOutput } from '../../../shared/output';
import { AuthAtendeeOutput } from '../output';

export function ApiAuthAtendeeResponses() {
  return applyDecorators(
    ApiTags('Participantes'),
    ApiOperation({ description: 'Login de participante de eventos' }),
    ApiOkResponse({
      description: 'Login efetuado com sucesso',
      type: AuthAtendeeOutput,
    }),
    ApiNotFoundResponse({
      description: 'E-mail não encontrado',
      type: ExceptionsOutput,
    }),
    ApiUnauthorizedResponse({
      description: 'Senha incorreta',
      type: ExceptionsOutput,
    }),
    ApiInternalServerErrorResponse({
      description: 'Erro interno do servidor',
      type: ExceptionsOutput,
    }),
  );
}
