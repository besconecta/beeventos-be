import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import { ApiAuthUserResponses } from '../decorators';
import { AuthUserInput } from '../input';
import { AuthUserOutput } from '../output';
import { AuthUserService } from '../services';

@ApiTags('Organizadores de eventos')
@Controller('user/login')
export class AuthUserController {
  constructor(private readonly authUserService: AuthUserService) {}

  @Post()
  @ApiAuthUserResponses()
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
