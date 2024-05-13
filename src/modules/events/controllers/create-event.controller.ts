import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { CreateEventInput } from '../input';
import { CreateEventOutput } from '../output';
import { CreateEventService } from '../services';

@Controller('event')
export class CreateEventController {
  constructor(private readonly createEventService: CreateEventService) {}

  @Post()
  async handle(
    @Body() input: CreateEventInput,
    @Res() res: Response,
  ): Promise<Response<CreateEventOutput>> {
    const data = await this.createEventService.execute(input);
    return res.status(HttpStatus.CREATED).json({
      message: 'Evento criado com sucesso',
      data,
    });
  }
}
