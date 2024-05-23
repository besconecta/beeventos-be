import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { UserGuard } from '../../../shared/auth/guard';
import { ApiCreateEventResponses } from '../decorators';
import { CreateEventInput } from '../input';
import { EventOutput } from '../output';
import { CreateEventService } from '../services';

@Controller('events')
export class CreateEventController {
  constructor(private readonly createEventService: CreateEventService) {}

  @Post()
  @UseGuards(UserGuard)
  @ApiCreateEventResponses()
  async handle(
    @Body() input: CreateEventInput,
    @Res() res: Response,
  ): Promise<Response<EventOutput>> {
    const data = await this.createEventService.execute(input);
    return res.status(HttpStatus.CREATED).json({ data });
  }
}
