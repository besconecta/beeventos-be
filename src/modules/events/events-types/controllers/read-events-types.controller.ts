import { Controller, Get, HttpStatus, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';

import { UserGuard } from '../../../../shared/auth/guard';
import { ApiReadEventsTypesResponses } from '../decorators';
import { EventTypeOutput } from '../output';
import { ReadEventsTypesService } from '../services';

@Controller('events/types')
export class ReadEventsTypesController {
  constructor(
    private readonly readEventsTypesService: ReadEventsTypesService,
  ) {}

  @Get()
  @ApiReadEventsTypesResponses()
  @UseGuards(UserGuard)
  async handle(@Res() res: Response): Promise<Response<EventTypeOutput[]>> {
    const data = await this.readEventsTypesService.execute();

    if (data.length > 0) {
      return res.status(HttpStatus.OK).json({
        data,
      });
    }
    return res.status(HttpStatus.NO_CONTENT).json({});
  }
}
