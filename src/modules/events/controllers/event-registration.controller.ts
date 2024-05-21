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
import { EventRegistrationInput } from '../input';
import { EventOutput } from '../output';
import { EventRegistrationService } from '../services';

@Controller('events/registration')
export class EventRegistrationController {
  constructor(
    private readonly eventRegistrationService: EventRegistrationService,
  ) {}

  @Post()
  @UseGuards(UserGuard)
  @ApiCreateEventResponses()
  async handle(
    @Body() input: EventRegistrationInput,
    @Res() res: Response,
  ): Promise<Response<EventOutput>> {
    const data = await this.eventRegistrationService.execute(input);
    return res.status(HttpStatus.CREATED).json({
      message: 'Inscrição realizada com sucesso',
      data,
    });
  }
}
