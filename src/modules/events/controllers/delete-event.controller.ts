import {
  Controller,
  Delete,
  HttpStatus,
  Param,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { UserGuard } from '../../../shared/auth/guard';
import { UUIDFormatValidation } from '../../../shared/validations';
import { ApiDeleteEventResponses } from '../decorators';
import { DeleteEventService } from '../services';

@Controller('events')
export class DeleteEventController {
  constructor(private readonly deleteEventService: DeleteEventService) {}

  @Delete(':id')
  @UseGuards(UserGuard)
  @ApiDeleteEventResponses()
  async handle(
    @Param('id', new UUIDFormatValidation('evento'))
    id: string,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    await this.deleteEventService.execute(id);
    return res.status(HttpStatus.NO_CONTENT).json({});
  }
}
