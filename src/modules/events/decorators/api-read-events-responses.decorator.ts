import { applyDecorators } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { InternalServerErrorOutput } from '../../../shared/exceptions/output';

export function ApiReadEventsResponses() {
  return applyDecorators(
    ApiTags('Gestão de eventos'),
    ApiOperation({ description: 'Listar todos os eventos' }),
    ApiOkResponse({
      description: 'Eventos listados com sucesso',
      schema: {
        type: 'object',
        example: {
          result: {
            data: [
              {
                id: '5aaca898-fe80-46f7-8530-bbcb837a2f49',
                eventType: 'Apresentação acadêmica',
                title: 'Apresentação XYZ',
                about:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac enim dolor. Nulla eu leo ut leo ultrices dictum. ',
                bannerUrl: 'https://get.image-example.com',
                user: 'Anakin Skywalker',
                local: 'Sala ABC',
                startAt: '2024-05-12 20:00:00',
                endAt: '2024-05-12 20:30:00',
                createdAt: '2024-05-12 20:30:00',
                status: 'started',
                updatedAt: '2024-05-12 20:30:00',
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
      },
    }),
    ApiNoContentResponse({}),
    ApiInternalServerErrorResponse({
      description: 'Erro interno do servidor',
      type: InternalServerErrorOutput,
    }),
  );
}
