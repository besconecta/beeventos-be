import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { PageDto } from '../../../shared/pagination';
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
  ): Promise<Response<PageDto<EventOutput>>> {
    const result = await this.readAvaliableEventsService.execute(filterOptions);

    if (result.meta.itemCount === 0) {
      return res.status(HttpStatus.NO_CONTENT).json({});
    }
    return res.status(HttpStatus.OK).json({
      result,
    });
  }
}
