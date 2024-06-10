import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';

import { ReadUserProfileService } from '../services/read-user-profile.service';

@Controller('users')
export class ReadUserProfileController {
  constructor(
    private readonly readUserProfileService: ReadUserProfileService,
  ) {}
  @Get('profile')
  async handle(@Headers('authorization') authHeader: string) {
    if (!authHeader) {
      throw new UnauthorizedException('Token não fornecido');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token não fornecido');
    }

    return await this.readUserProfileService.execute(token);
  }
}
