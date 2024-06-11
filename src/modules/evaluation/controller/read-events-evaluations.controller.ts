import {
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { UserGuard } from '../../../shared/auth/guard';
import { PageDto } from '../../../shared/pagination';
import { ApiReadEventEvaluationsResponses } from '../decorators';
import { EvaluationFilters } from '../input';
import { EventEvaluationsOutput } from '../output';
import { ReadEventsEvaluationsService } from '../services';

@Controller('evaluations')
export class ReadEventsEvaluationsController {
  constructor(
    private readonly readEventsEvaluationsService: ReadEventsEvaluationsService,
  ) {}

  @Get(':eventId')
  @UseGuards(UserGuard)
  @ApiReadEventEvaluationsResponses()
  async handle(
    @Param('eventId') eventId: string,
    @Query() filterOptions: EvaluationFilters,
    @Res() res: Response,
  ): Promise<Response<PageDto<EventEvaluationsOutput>>> {
    const result = await this.readEventsEvaluationsService.execute(
      filterOptions,
      eventId,
    );

    if (result.meta.itemCount === 0) {
      throw new NotFoundException(
        'Não há avaliações registradas para este evento.',
      );
    }

    return res.status(HttpStatus.OK).json({
      data: result.data,
      meta: result.meta,
    });
  }
}
