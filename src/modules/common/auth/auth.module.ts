import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from '../../../modules/users/user.module';
import { jwtConstants } from '../constants/jwt.constants';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '172800s' },
    }),
  ],
})
export class AuthModule {}
