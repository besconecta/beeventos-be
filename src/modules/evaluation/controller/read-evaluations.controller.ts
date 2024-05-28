import {
  Controller,
  Get,
  HttpStatus,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { UserGuard } from '../../../shared/auth/guard';
import { PageDto } from '../../../shared/pagination';
import { ApiReadEvaluationsResponses } from '../decorators';
import { EvaluationFilters } from '../input';
import { EvaluationsOutput } from '../output';
import { ReadEvaluationsService } from '../services';

@Controller('evaluations')
export class ReadEvaluationsController {
  constructor(
    private readonly readEvaluationsService: ReadEvaluationsService,
  ) {}

  @Get()
  @UseGuards(UserGuard)
  @ApiReadEvaluationsResponses()
  async handle(
    @Query() filterOptions: EvaluationFilters,
    @Res() res: Response,
  ): Promise<Response<PageDto<EvaluationsOutput>>> {
    const result = await this.readEvaluationsService.execute(filterOptions);

    if (result.meta.itemCount === 0) {
      return res.status(HttpStatus.NO_CONTENT).json({});
    }
    return res.status(HttpStatus.OK).json({
      result,
    });
  }
}
