import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import { AdminGuard } from '../../../shared/auth/guard';
import { ApiCreateUserResponses } from '../decorators';
import { CreateUserInput } from '../input';
import { UserAccountOutput } from '../output';
import { CreateUserService } from '../services';

@Controller('users/register')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  @UseGuards(AdminGuard)
  @ApiCreateUserResponses()
  async handle(
    @Body() input: CreateUserInput,
    @Res() res: Response,
  ): Promise<Response<UserAccountOutput>> {
    const data = await this.createUserService.execute(input);
    return res.status(HttpStatus.CREATED).json({
      message: 'Conta de usuário criada com sucesso',
      data,
    });
  }
}
