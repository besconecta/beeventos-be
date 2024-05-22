import {
  Body,
  Controller,
  HttpStatus,
  Param,
  Patch,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { UserGuard } from '../../../shared/auth/guard';
import { UUIDFormatValidation } from '../../../shared/validations';
import { UpdateInputValidator } from '../../../shared/validations/input.validation';
import { ApiUpdateEventResponses } from '../decorators';
import { UpdateEventInput } from '../input';
import { EventOutput } from '../output';
import { UpdateEventService } from '../services';

@Controller('events')
export class UpdateEventController {
  constructor(private readonly updateEventService: UpdateEventService) {}

  @Patch(':id')
  @UseGuards(UserGuard)
  @ApiUpdateEventResponses()
  async handle(
    @Param('id', new UUIDFormatValidation()) id: string,
    @Body() input: UpdateEventInput,
    @Res() res: Response,
  ): Promise<Response<EventOutput>> {
    UpdateInputValidator.validate(input);

    const data = await this.updateEventService.execute(id, input);

    if (data.affected === 0) {
      return res.status(HttpStatus.NO_CONTENT).json({});
    }
    return res.status(HttpStatus.OK).json({
      message: 'Evento atualizado com sucesso',
    });
  }
}
