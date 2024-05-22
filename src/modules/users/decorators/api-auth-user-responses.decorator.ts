import { applyDecorators } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { AuthUserOutput } from '../output';

export function ApiAuthUserResponses() {
  return applyDecorators(
    ApiTags('Organizadores'),
    ApiOperation({ description: 'Login de usuário organizador de eventos' }),
    ApiOkResponse({
      description: 'Login efetuado com sucesso',
      type: AuthUserOutput,
    }),
    ApiNotFoundResponse({ description: 'E-mail não encontrado' }),
    ApiUnauthorizedResponse({ description: 'Senha incorreta' }),
    ApiInternalServerErrorResponse({
      description: 'Houve um erro interno ao processar solicitação',
    }),
  );
}
