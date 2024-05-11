import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { ApiCreateEventTypeResponses } from '../decorators';
import { EventTypeInput } from '../input';
import { EventTypeOutput } from '../output';
import { CreateEventTypeService } from '../services';

@Controller('event/type')
export class CreateEventTypeController {
  constructor(
    private readonly createEventTypeService: CreateEventTypeService,
  ) {}

  @Post()
  @ApiCreateEventTypeResponses()
  async handle(
    @Body() input: EventTypeInput,
    @Res() res: Response,
  ): Promise<Response<EventTypeOutput>> {
    const data = await this.createEventTypeService.execute(input);
    return res.status(HttpStatus.CREATED).json({
      message: 'Tipo de evento criado com sucesso',
      data,
    });
  }
}
