import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Response } from 'express';
import { AdminGuard } from 'src/shared/auth/guard';

import { CreateUserInput } from '../input';
import { UserAccountOutput } from '../output';
import { CreateUserService } from '../services';

@ApiTags('Organizadores de eventos')
@Controller('account/user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @UseGuards(AdminGuard)
  @Post()
  @ApiOperation({
    description: 'Cria conta de usuário organizador de eventos',
  })
  @ApiCreatedResponse({
    description: 'Conta de usuário criada com sucesso',
    type: UserAccountOutput,
  })
  @ApiBadRequestResponse({ description: 'As senhas não coincidem' })
  @ApiConflictResponse({
    description:
      'Registro duplicado: Key (field)=(description_field) already exists.',
  })
  @ApiInternalServerErrorResponse({
    description: 'Houve um erro interno ao processar solicitação',
  })
  async handle(@Body() data: CreateUserInput, @Res() res: Response) {
    const result = await this.createUserService.execute(data);
    return res.status(HttpStatus.CREATED).json({
      message: 'Conta de usuário criada com sucesso',
      result,
    });
  }
}
