import { Injectable, UnauthorizedException } from '@nestjs/common';

import { ReadAtendeeByIdService } from '../../../modules/atendees/services';
import { ReadUserByIdService } from '../../../modules/users/services';
import { userProfileMapper } from '../helpers/user-profile.mapper';
import { UserProfileOutput } from '../output/user-profile.output';
import { AuthService } from './auth.service';

@Injectable()
export class ReadUserProfileService {
  constructor(
    private readonly authService: AuthService,
    private readonly readUserByIdService: ReadUserByIdService,
    private readonly readAtendeeByIdService: ReadAtendeeByIdService,
  ) {}

  async execute(token: string): Promise<UserProfileOutput> {
    const isValidToken = await this.authService.validateToken(token);

    const userProfile = await this.readUserByIdService.execute(
      isValidToken.sub,
    );

    if (!userProfile) {
      const atendeeProfile = await this.readAtendeeByIdService.execute(
        isValidToken.sub,
      );
      if (!atendeeProfile) {
        throw new UnauthorizedException('Usuário sem permissão');
      } else {
        return userProfileMapper(atendeeProfile);
      }
    } else {
      return userProfileMapper(userProfile);
    }
  }
}
