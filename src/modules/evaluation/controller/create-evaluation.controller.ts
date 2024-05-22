import { Body, Controller, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { ApiEvaluationResponses } from '../decorators';
import { CreateEvaluationInput } from '../input';
import { CreateEvaluationService } from '../services';

@Controller('events')
export class CreateEvaluationController {
  constructor(
    private readonly createEvaluationService: CreateEvaluationService,
  ) {}

  @Post(':id/evaluation')
  @ApiEvaluationResponses()
  async handle(
    @Param('id') id: string,
    @Body() input: CreateEvaluationInput,
    @Res() res: Response,
  ) {
    const data = await this.createEvaluationService.execute(id, input);
    return res
      .status(HttpStatus.CREATED)
      .json({ message: 'Avaliação realizada com sucesso', data });
  }
}
