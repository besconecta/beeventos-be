import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateUserController } from './controllers/create-user.controller';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { CreateUserService } from './services/create-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [CreateUserService, UserRepository],
  controllers: [CreateUserController],
})
export class UserModule {}
