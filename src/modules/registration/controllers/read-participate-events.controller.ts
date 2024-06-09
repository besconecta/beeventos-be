import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { AtendeeGuard } from '../../../shared/auth/guard';
import { ReadParticipateEventsService } from '../services';

@Controller('events')
export class ReadParticipateEventsController {
  constructor(
    private readonly readParticipateEventsService: ReadParticipateEventsService,
  ) {}

  @Get('registrations/:atendeeId')
  @UseGuards(AtendeeGuard)
  async handle(@Param('atendeeId') atendeeId: string, @Res() res: Response) {
    const result = await this.readParticipateEventsService.execute(atendeeId);
    return res.status(HttpStatus.OK).json({
      result,
    });
  }
}
