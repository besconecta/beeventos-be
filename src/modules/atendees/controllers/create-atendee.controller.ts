import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { ApiCreateAtendeeResponses } from '../decorators';
import { CreateAtendeeInput } from '../input';
import { AtendeeAccountOutput } from '../output';
import { CreateAtendeeService } from '../services';

@Controller('atendees/register')
export class CreateAtendeeController {
  constructor(private readonly createAtendeeService: CreateAtendeeService) {}

  @Post()
  @ApiCreateAtendeeResponses()
  async handle(
    @Body() input: CreateAtendeeInput,
    @Res() res: Response,
  ): Promise<Response<AtendeeAccountOutput>> {
    const data = await this.createAtendeeService.execute(input);
    return res.status(HttpStatus.CREATED).json({
      message: 'Conta de participante criada com sucesso',
      data,
    });
  }
}
