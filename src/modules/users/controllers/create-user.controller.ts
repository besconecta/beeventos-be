import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';

import { CreateUserDto } from '../dtos/create-user.dto';
import { CreateUserService } from '../services/create-user.service';

@ApiTags('Organizadores de eventos')
@Controller('account/user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @ApiCreatedResponse({
    description: 'Conta de usuário criada com sucesso',
  })
  @ApiBadRequestResponse({ description: 'As senhas não coincidem' })
  @ApiConflictResponse({
    description:
      'Registro duplicado: Key (field)=(description_field) already exists.',
  })
  @ApiInternalServerErrorResponse({
    description: 'Houve um erro interno ao processar solicitação',
  })
  @Post()
  async handle(@Body() data: CreateUserDto, @Res() res: Response) {
    const result = await this.createUserService.execute(data);
    return res.status(HttpStatus.CREATED).json({
      message: 'Conta de usuário criada com sucesso',
      result,
    });
  }
}
