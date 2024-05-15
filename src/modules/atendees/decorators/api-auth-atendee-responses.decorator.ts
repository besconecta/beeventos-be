import { applyDecorators } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { AuthAtendeeOutput } from '../output';

export function ApiAuthAtendeeResponses() {
  return applyDecorators(
    ApiTags('Participantes de eventos'),
    ApiOperation({ description: 'Login de participante de eventos' }),
    ApiOkResponse({
      description: 'Login efetuado com sucesso',
      type: AuthAtendeeOutput,
    }),
    ApiNotFoundResponse({ description: 'E-mail não encontrado' }),
    ApiUnauthorizedResponse({ description: 'Senha incorreta' }),
    ApiInternalServerErrorResponse({
      description: 'Houve um erro interno ao processar solicitação',
    }),
  );
}
