import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcryptService } from 'src/shared/bcrypt/bcrypt.service';

import { AuthService } from '../common/auth/services/auth.service';
import { AuthUserController, CreateUserController } from './controllers';
import { UserEntity } from './entities';
import { UserRepository } from './repositories';
import { AuthUserService, CreateUserService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
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
