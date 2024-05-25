import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { ApiAuthUserResponses } from '../decorators';
import { AuthUserInput } from '../input';
import { AuthUserOutput } from '../output';
import { AuthUserService } from '../services';

@Controller('users/login')
export class AuthUserController {
  constructor(private readonly authUserService: AuthUserService) {}

  @Post()
  @ApiAuthUserResponses()
  async handle(
    @Body() input: AuthUserInput,
    @Res() res: Response<AuthUserOutput>,
  ): Promise<Response<AuthUserOutput>> {
    const data = await this.authUserService.execute(input);
    return res.status(HttpStatus.OK).json({
      message: 'Login efetuado com sucesso',
      access_token: data,
    });
  }
}
