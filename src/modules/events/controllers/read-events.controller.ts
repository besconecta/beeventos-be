import {
  Controller,
  Get,
  HttpStatus,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from 'src/shared/auth/guard';

import { ApiReadEventsResponses } from '../decorators';
import { EventsFilters } from '../input';
import { EventOutput } from '../output';
import { ReadEventsService } from '../services';

@Controller('events')
export class ReadEventsController {
  constructor(private readonly readEventsService: ReadEventsService) {}

  @Get()
  @UseGuards(AuthGuard)
  @ApiReadEventsResponses()
  async handle(
    @Query() filterOptions: EventsFilters,
    @Res() res: Response,
  ): Promise<Response<EventOutput[]>> {
    const result = await this.readEventsService.execute(filterOptions);

    if (result.meta.itemCount === 0) {
      return res.status(HttpStatus.NO_CONTENT).json({});
    }
    return res.status(HttpStatus.OK).json({
      result,
    });
  }
}
