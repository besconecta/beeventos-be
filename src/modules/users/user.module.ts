import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcryptService } from 'src/shared/bcrypt/bcrypt.service';

import { AuthService } from '../../shared/auth/services/auth.service';
import { AuthUserController, CreateUserController } from './controllers';
import { Users } from './entities';
import { UserRepository } from './repositories';
import { AuthUserService, CreateUserService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [
    CreateUserService,
    UserRepository,
    BcryptService,
    AuthUserService,
    AuthService,
  ],
  controllers: [CreateUserController, AuthUserController],
})
export class UserModule {}
