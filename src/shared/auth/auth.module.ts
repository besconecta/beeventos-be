import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { jwtConstants } from '../constants/jwt.constants';
import { AuthService } from './services/auth.service';
import { BcryptService } from './services/bcrypt.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '172800s' },
    }),
  ],
  providers: [AuthService, BcryptService],
  exports: [AuthService, BcryptService],
})
export class AuthModule {}
