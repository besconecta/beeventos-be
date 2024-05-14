import {
  Controller,
  Delete,
  HttpStatus,
  Param,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { UserGuard } from '../../../shared/auth/guard';
import { UUIDFormatValidation } from '../../../shared/validations';
import { ApiDeleteEventResponses } from '../decorators';
import { EventOutput } from '../output';
import { DeleteEventService } from '../services';

@Controller('events')
export class DeleteEventController {
  constructor(private readonly deleteEventService: DeleteEventService) {}

  @Delete(':id')
  @ApiDeleteEventResponses()
  @UseGuards(UserGuard)
  async handle(
    @Param('id', new UUIDFormatValidation()) id: string,
    @Res() res: Response,
  ): Promise<Response<EventOutput>> {
    const data = await this.deleteEventService.execute(id);

    if (data.affected === 0) {
      return res.status(HttpStatus.NO_CONTENT).json({});
    }
    return res.status(HttpStatus.OK).json({
      message: 'Evento excluído com sucesso',
    });
  }
}
