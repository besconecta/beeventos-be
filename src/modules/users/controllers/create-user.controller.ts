import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import { AdminGuard } from '../../../shared/auth/guard';
import { ApiCreateUserResponses } from '../decorators';
import { CreateUserInput } from '../input';
import { CreateUserService } from '../services';

@ApiTags('Organizadores de eventos')
@Controller('user/account')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  @UseGuards(AdminGuard)
  @ApiCreateUserResponses()
  async handle(@Body() input: CreateUserInput, @Res() res: Response) {
    const data = await this.createUserService.execute(input);
    return res.status(HttpStatus.CREATED).json({
      message: 'Conta de usuário criada com sucesso',
      data,
    });
  }
}
