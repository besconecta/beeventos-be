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
import { PageDto } from '../../../shared/pagination';
import { AtendeeRegistrationsOutput } from '../output';
import { ReadAtendeeRegistrationsService } from '../services';

@Controller('events')
export class ReadAtendeeRegistrationsController {
  constructor(
    private readonly readAtendeeRegistrationsService: ReadAtendeeRegistrationsService,
  ) {}

  @Get('registrations/:atendeeId')
  @UseGuards(AtendeeGuard)
  async handle(
    @Param('atendeeId') atendeeId: string,
    @Res() res: Response,
  ): Promise<Response<PageDto<AtendeeRegistrationsOutput>>> {
    const result =
      await this.readAtendeeRegistrationsService.execute(atendeeId);
    return res.status(HttpStatus.OK).json({
      result,
    });
  }
}
