import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { UserGuard } from '../../../../shared/auth/guard';
import { ApiCreateEventTypeResponses } from '../decorators';
import { CreateEventTypeInput } from '../input';
import { EventTypeOutput } from '../output';
import { CreateEventTypeService } from '../services';

@Controller('event/type')
export class CreateEventTypeController {
  constructor(
    private readonly createEventTypeService: CreateEventTypeService,
  ) {}

  @Post()
  @UseGuards(UserGuard)
  @ApiCreateEventTypeResponses()
  async handle(
    @Body() input: CreateEventTypeInput,
    @Res() res: Response,
  ): Promise<Response<EventTypeOutput>> {
    const data = await this.createEventTypeService.execute(input);
    return res.status(HttpStatus.CREATED).json({
      message: 'Tipo de evento criado com sucesso',
      data,
    });
  }
}
