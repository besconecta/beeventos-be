import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { ApiReadEventsResponses } from '../decorators';
import { EventsFilters } from '../input';
import { EventOutput } from '../output';
import { ReadEventsService } from '../services';

@Controller('events')
export class ReadEventsController {
  constructor(private readonly readEventsService: ReadEventsService) {}

  @Get()
  @ApiReadEventsResponses()
  async handle(
    @Query() filterOptions: EventsFilters,
    @Res() res: Response,
  ): Promise<Response<EventOutput[]>> {
    // const { startAt, endAt } = filterOptions;
    // const startDate = new Date(startAt).toISOString();
    // const endDate = new Date(endAt).toISOString();

    const data = await this.readEventsService.execute(filterOptions);

    if (data.length === 0) {
      return res.status(HttpStatus.NO_CONTENT).json({});
    }
    return res.status(HttpStatus.OK).json({
      data,
    });
  }
}
