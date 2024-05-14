import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

import { ApiReadEventsResponses } from '../decorators';
import { EventOutput } from '../output';
import { ReadEventsService } from '../services';

@Controller('events')
export class ReadEventsController {
  constructor(private readonly readEventsService: ReadEventsService) {}

  @Get()
  @ApiReadEventsResponses()
  async handle(@Res() res: Response): Promise<Response<EventOutput[]>> {
    const data = await this.readEventsService.execute();

    if (data.length === 0) {
      return res.status(HttpStatus.NO_CONTENT).json({});
    }
    return res.status(HttpStatus.CREATED).json({
      data,
    });
  }
}
