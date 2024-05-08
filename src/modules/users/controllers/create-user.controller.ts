import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { CreateUserDto } from '../dtos/create-user.dto';
import { CreateUserService } from '../services/create-user.service';

@Controller('account/user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async handle(@Body() data: CreateUserDto, @Res() res: Response) {
    const result = await this.createUserService.execute(data);
    return res.status(HttpStatus.CREATED).json({
      message: 'Conta de usuário criada com sucesso',
      result,
    });
  }
}
