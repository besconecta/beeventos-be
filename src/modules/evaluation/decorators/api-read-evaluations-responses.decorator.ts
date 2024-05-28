import { applyDecorators } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

import { InternalServerErrorOutput } from '../../../shared/exceptions/output';
import { PageDto } from '../../../shared/pagination';
import { EvaluationsOutput } from '../output';

export function ApiReadEvaluationsResponses() {
  return applyDecorators(
    ApiTags('Avaliação de evento'),
    ApiOperation({ description: 'Listar todos as avaliações' }),
    ApiOkResponse({
      description: 'Avaliações listadas com sucesso',
      type: [PageDto<EvaluationsOutput>],
    }),
    ApiNoContentResponse({}),
    ApiInternalServerErrorResponse({
      description: 'Erro interno do servidor',
      type: InternalServerErrorOutput,
    }),
  );
}
