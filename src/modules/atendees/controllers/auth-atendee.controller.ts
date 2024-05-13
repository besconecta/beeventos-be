import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

import { ApiAuthAtendeeResponses } from '../decorators';
import { AuthAtendeeInput } from '../input';
import { AuthAtendeeOutput } from '../output';
import { AuthAtendeeService } from '../services';

@Controller('atendees/login')
export class AuthAtendeeController {
  constructor(private readonly authAtendeeService: AuthAtendeeService) {}

  @Post()
  @ApiAuthAtendeeResponses()
  async handle(
    @Body() input: AuthAtendeeInput,
    @Res() res: Response<AuthAtendeeOutput>,
  ) {
    const data = await this.authAtendeeService.execute(input);
    return res.status(HttpStatus.OK).json({
      message: 'Login efetuado com sucesso',
      access_token: data,
    });
  }
}
