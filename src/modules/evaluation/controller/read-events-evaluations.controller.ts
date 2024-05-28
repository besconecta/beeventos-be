import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { UserGuard } from '../../../shared/auth/guard';
import { PageDto } from '../../../shared/pagination';
import { ApiReadEventEvaluationsResponses } from '../decorators';
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
    @Res() res: Response,
  ): Promise<Response<PageDto<EventEvaluationsOutput>>> {
    const result = await this.readEventsEvaluationsService.execute(eventId);

    if (result.meta.itemCount === 0) {
      return res.status(HttpStatus.NO_CONTENT).json({});
    }

    return res.status(HttpStatus.OK).json({
      data: result.data,
      meta: result.meta,
    });
  }
}
