import {
  Body,
  Controller,
  HttpStatus,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { UserGuard } from '../../../shared/auth/guard';
import { ApiEventRegistrationResponses } from '../decorators';
import { EventRegistrationInput } from '../input';
import { EventOutput } from '../output';
import { EventRegistrationService } from '../services';

@Controller('events')
export class EventRegistrationController {
  constructor(
    private readonly eventRegistrationService: EventRegistrationService,
  ) {}

  @Post(':id/registration')
  @UseGuards(UserGuard)
  @ApiEventRegistrationResponses()
  async handle(
    @Param('id') id: string,
    @Body() input: EventRegistrationInput,
    @Res() res: Response,
  ): Promise<Response<EventOutput>> {
    const data = await this.eventRegistrationService.execute(id, input);
    return res.status(HttpStatus.CREATED).json({
      message: 'Inscrição realizada com sucesso',
      data,
    });
  }
}
