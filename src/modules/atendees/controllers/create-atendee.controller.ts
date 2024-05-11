import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import { ApiCreateAtendeeResponses } from '../decorators';
import { CreateAtendeeInput } from '../input';
import { CreateAtendeeService } from '../services';

@ApiTags('Participantes de eventos')
@Controller('atendee/account')
export class CreateAtendeeController {
  constructor(private readonly createAtendeeService: CreateAtendeeService) {}

  @Post()
  @ApiCreateAtendeeResponses()
  async handle(@Body() input: CreateAtendeeInput, @Res() res: Response) {
    const data = await this.createAtendeeService.execute(input);
    return res.status(HttpStatus.CREATED).json({
      message: 'Conta de participante criada com sucesso',
      data,
    });
  }
}
