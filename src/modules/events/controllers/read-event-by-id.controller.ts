import {
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { UUIDFormatValidation } from '../../../shared/validations';
import { ApiReadEventByIdResponses } from '../decorators';
import { EventOutput } from '../output';
import { ReadEventByIdService } from '../services';

@Controller('events')
export class ReadEventByIdController {
  constructor(private readonly readEventByIdService: ReadEventByIdService) {}

  @Get()
  @ApiReadEventByIdResponses()
  async handle(
    @Param('id', new UUIDFormatValidation()) id: string,
    @Res() res: Response,
  ): Promise<Response<EventOutput>> {
    const data = await this.readEventByIdService.execute(id);

    if (!data) {
      throw new NotFoundException('Evento não encontrado');
    }
    return res.status(HttpStatus.OK).json({
      data,
    });
  }
}
