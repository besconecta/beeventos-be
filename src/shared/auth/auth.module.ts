import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Atendees } from 'src/modules/atendees/entities';
import { Users } from 'src/modules/users/entities';

import { AtendeeRepository } from '../../modules/atendees/repositories';
import { ReadAtendeeByIdService } from '../../modules/atendees/services';
import { UserRepository } from '../../modules/users/repositories';
import { ReadUserByIdService } from '../../modules/users/services';
import { jwtConstants } from '../constants/jwt.constants';
import { ReadUserProfileController } from './controllers/read-user-profile.controller';
import { AuthService, BcryptService, ReadUserProfileService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Atendees]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '172800s' },
    }),
  ],
  controllers: [ReadUserProfileController],
  providers: [
    AuthService,
    BcryptService,
    ReadUserProfileService,
    ReadUserByIdService,
    UserRepository,
    ReadAtendeeByIdService,
    AtendeeRepository,
  ],
  exports: [AuthService, BcryptService],
})
export class AuthModule {}
