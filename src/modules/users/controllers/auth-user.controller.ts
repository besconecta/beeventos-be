import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Response } from 'express';

import { AuthUserInput } from '../input';
import { AuthUserOutput } from '../output';
import { AuthUserService } from '../services';

@ApiTags('Organizadores de eventos')
@Controller('user/login')
export class AuthUserController {
  constructor(private readonly authUserService: AuthUserService) {}

  @Post()
  @ApiOperation({ description: 'Login de usuário organizador de eventos' })
  @ApiOkResponse({
    description: 'Login efetuado com sucesso',
    type: AuthUserOutput,
  })
  @ApiNotFoundResponse({ description: 'E-mail não encontrado' })
  @ApiUnauthorizedResponse({ description: 'Senha incorreta' })
  @ApiInternalServerErrorResponse({
    description: 'Houve um erro interno ao processar solicitação',
  })
  async handle(
    @Body() data: AuthUserInput,
    @Res() res: Response<AuthUserOutput>,
  ) {
    const result = await this.authUserService.execute(data);
    return res.status(HttpStatus.OK).json({
      message: 'Login efetuado com sucesso',
      access_token: result,
    });
  }
}
