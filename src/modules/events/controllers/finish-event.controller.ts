import {
  Controller,
  HttpStatus,
  Param,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { UserGuard } from '../../../shared/auth/guard';
import { UUIDFormatValidation } from '../../../shared/validations';
import { UpdateInputValidator } from '../../../shared/validations/input.validation';
import { ApiFinishEventResponses } from '../decorators';
import { FinishEventService } from '../services';

@Controller('events')
export class FinishEventController {
  constructor(private readonly finishEventService: FinishEventService) {}

  @Put(':id/finish')
  @UseGuards(UserGuard)
  @ApiFinishEventResponses()
  async handle(
    @Param('id', new UUIDFormatValidation('evento')) id: string,
    @Res() res: Response,
  ): Promise<Response> {
    UpdateInputValidator.validate(id);

    const data = await this.finishEventService.execute(id);
    if (data) {
      return res.status(HttpStatus.OK).json({
        message: 'Evento finalizado com sucesso.',
      });
    }
  }
}
