import { applyDecorators } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { InternalServerErrorOutput } from '../../../shared/exceptions/output';
import { EvaluationFilters } from '../input';

export function ApiReadEventEvaluationsResponses() {
  return applyDecorators(
    ApiTags('Avaliação de evento'),
    ApiOperation({ description: 'Listar todos as avaliações' }),
    ApiParam({
      name: 'eventId',
      description: 'ID do evento',
      example: '65c02e73-0df2-4eb9-9fdf-4442f0219c96',
    }),
    ApiQuery({
      type: EvaluationFilters,
      description: 'Opções de filtro',
      required: false,
    }),
    ApiOkResponse({
      description: 'Avaliações listadas com sucesso',
      schema: {
        type: 'object',
        example: {
          data: [
            {
              evaluations: [
                {
                  id: '11bf6b84-1a77-4c4e-8fbb-3a1a15e39224',
                  atendee: 'Anonimo',
                  event: 'Aula XYZ - Apresentação XYZ',
                  rating: 4,
                  comment: 'Lorem ipsum dolor',
                  createdAt: '2024-05-25T04:47:45.542Z',
                  updatedAt: '2024-05-25T04:47:45.542Z',
                },
              ],
              average: 4,
            },
          ],
          meta: {
            page: 1,
            take: 10,
            itemCount: 1,
            pageCount: 1,
            hasPreviousPage: false,
            hasNextPage: false,
          },
        },
      },
    }),
    ApiNoContentResponse({}),
    ApiInternalServerErrorResponse({
      description: 'Erro interno do servidor',
      type: InternalServerErrorOutput,
    }),
  );
}
