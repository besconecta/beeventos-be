import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BcryptService } from 'src/shared/bcrypt/bcrypt.service';

import { AuthUserController } from './controllers';
import { CreateUserController } from './controllers/create-user.controller';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { AuthUserService } from './services';
import { CreateUserService } from './services/create-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    CreateUserService,
    UserRepository,
    BcryptService,
    AuthUserService,
  ],
  controllers: [CreateUserController, AuthUserController],
})
export class UserModule {}
