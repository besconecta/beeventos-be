import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { ApiReadAvaliableEventsResponses } from '../decorators';
import { EventsFilters } from '../input';
import { EventOutput } from '../output';
import { ReadAvaliableEventsService } from '../services';

@Controller('events')
export class ReadAvaliableEventsController {
  constructor(
    private readonly readAvaliableEventsService: ReadAvaliableEventsService,
  ) {}

  @Get('avaliable')
  @ApiReadAvaliableEventsResponses()
  async handle(
    @Query() filterOptions: EventsFilters,
    @Res() res: Response,
  ): Promise<Response<EventOutput[]>> {
    const data = await this.readAvaliableEventsService.execute(filterOptions);

    if (data.length === 0) {
      return res.status(HttpStatus.NO_CONTENT).json({});
    }
    return res.status(HttpStatus.OK).json({
      data,
    });
  }
}
