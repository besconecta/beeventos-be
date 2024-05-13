import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../../shared/auth/auth.module';
import { AuthUserController, CreateUserController } from './controllers';
import { Users } from './entities';
import { UserRepository } from './repositories';
import {
  AuthUserService,
  CreateUserService,
  ReadUserByIdService,
} from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Users]), AuthModule],
  providers: [
    CreateUserService,
    ReadUserByIdService,
    UserRepository,
    AuthUserService,
  ],
  controllers: [CreateUserController, AuthUserController],
  exports: [ReadUserByIdService],
})
export class UserModule {}
