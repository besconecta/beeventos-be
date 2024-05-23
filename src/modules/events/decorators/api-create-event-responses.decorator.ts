import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { EventOutput } from '../output';

export function ApiCreateEventResponses() {
  return applyDecorators(
    ApiTags('Gestão de eventos'),
    ApiOperation({ description: 'Cadastro evento' }),
    ApiCreatedResponse({
      description: 'Evento criado com sucesso',
      type: EventOutput,
    }),
    ApiBadRequestResponse({
      description: 'Erros de validação',
      schema: {
        example: [
          'ID do tipo de evento é obrigatório',
          'ID do evento com formato inválido',
          'ID do usuário é obrigatório',
          'ID do usuário com formato inválido',
          'Título do evento é obrigatório',
          'Título do evento deve conter no máximo 100 caracteres',
          'Descrição do evento é obrigatória',
          'Local do evento é obrigatório',
          'Status do evento deve ser: idle, started ou finished',
        ],
      },
    }),
    ApiConflictResponse({
      description:
        'Registro duplicado: Key (field)=(description_field) already exists.',
    }),
    ApiNotFoundResponse({
      description: 'Registros não encontrados',
      schema: {
        example: ['Usuário não encontrado', 'Tipo de evento não encontrado'],
      },
    }),
    ApiUnauthorizedResponse({ description: 'Usuário sem permissão' }),
    ApiInternalServerErrorResponse({
      description: 'Erro interno do servidor',
      content: {
        type: { example: 'Houve um erro interno ao processar solicitação' },
      },
    }),
  );
}
