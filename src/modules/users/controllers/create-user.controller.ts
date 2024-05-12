import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { ApiCreateUserResponses } from '../decorators';
import { CreateUserInput } from '../input';
import { CreateUserService } from '../services';

//import { AdminGuard } from '../../../shared/auth/guard';
@Controller('user/account')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  //@UseGuards(AdminGuard)
  @ApiCreateUserResponses()
  async handle(@Body() input: CreateUserInput, @Res() res: Response) {
    const data = await this.createUserService.execute(input);
    return res.status(HttpStatus.CREATED).json({
      message: 'Conta de usuário criada com sucesso',
      data,
    });
  }
}
