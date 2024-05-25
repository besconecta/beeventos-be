import { applyDecorators } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import {
  InternalServerErrorOutput,
  UnauthorizedErrorOutput,
} from '../../../shared/exceptions/output';
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
      schema: {
        type: 'object',
        properties: {
          statusCode: { type: 'number', example: 404 },
          timestamp: { type: 'date', example: '14:00:00 PM' },
          message: {
            type: 'string',
            example: 'E-mail anakin@tatooine.com não encontrado',
          },
        },
      },
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
