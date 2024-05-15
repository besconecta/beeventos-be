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

import { UserGuard } from '../../../../shared/auth/guard';
import { UUIDFormatValidation } from '../../../../shared/validations';
import { UpdateInputValidator } from '../../../../shared/validations/input.validation';
import { ApiUpdateEventTypeResponses } from '../decorators';
import { UpdateEventTypeInput } from '../input';
import { EventTypeOutput } from '../output';
import { UpdateEventTypeService } from '../services';

@Controller('events/types')
export class UpdateEventTypeController {
  constructor(
    private readonly updateEventTypeService: UpdateEventTypeService,
  ) {}

  @Patch(':id')
  @ApiUpdateEventTypeResponses()
  @UseGuards(UserGuard)
  async handle(
    @Param('id', new UUIDFormatValidation()) id: string,
    @Body() input: UpdateEventTypeInput,
    @Res() res: Response,
  ): Promise<Response<EventTypeOutput>> {
    UpdateInputValidator.validate(input);

    const data = await this.updateEventTypeService.execute(id, input);

    if (data.affected === 0) {
      return res.status(HttpStatus.NO_CONTENT);
    }
    return res.status(HttpStatus.OK).json({
      message: 'Tipo de evento atualizado com sucesso',
    });
  }
}
