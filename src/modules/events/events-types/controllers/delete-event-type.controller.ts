import {
  Controller,
  Delete,
  HttpStatus,
  Param,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { UserGuard } from '../../../../shared/auth/guard';
import { UUIDFormatValidation } from '../../../../shared/validations';
import { ApiDeleteEventTypeResponses } from '../decorators';
import { EventTypeOutput } from '../output';
import { DeleteEventTypeService } from '../services';

@Controller('events-types')
export class DeleteEventTypeController {
  constructor(
    private readonly deleteEventTypeService: DeleteEventTypeService,
  ) {}

  @Delete(':id')
  @ApiDeleteEventTypeResponses()
  @UseGuards(UserGuard)
  async handle(
    @Param('id', new UUIDFormatValidation()) id: string,
    @Res() res: Response,
  ): Promise<Response<EventTypeOutput>> {
    const data = await this.deleteEventTypeService.execute(id);

    if (data.affected === 0) {
      return res.status(HttpStatus.NO_CONTENT);
    }
    return res.status(HttpStatus.OK).json({
      message: 'Tipo de evento excluído com sucesso',
    });
  }
}
