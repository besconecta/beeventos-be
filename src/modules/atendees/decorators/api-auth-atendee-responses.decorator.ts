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
    ApiTags('Participantes'),
    ApiOperation({ description: 'Login de participante de eventos' }),
    ApiOkResponse({
      description: 'Login efetuado com sucesso',
      type: AuthAtendeeOutput,
    }),
    ApiNotFoundResponse({
      description: 'E-mail não encontrado',
      content: {
        type: { example: 'E-mail anakin@tatooine.com não encontrado' },
      },
    }),
    ApiUnauthorizedResponse({
      description: 'Senha incorreta',
      content: {
        type: { example: 'Senha incorreta' },
      },
    }),
    ApiInternalServerErrorResponse({
      description: 'Erro interno do servidor',
      content: {
        type: { example: 'Houve um erro interno ao processar solicitação' },
      },
    }),
  );
}
