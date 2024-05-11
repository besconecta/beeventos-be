import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/shared/auth/services/auth.service';
import { BcryptService } from 'src/shared/bcrypt/bcrypt.service';

import { AuthAtendeeController, CreateAtendeeController } from './controllers';
import { AtendeeEntity } from './entities';
import { AtendeeRepository } from './repositories';
import { AuthAtendeeService, CreateAtendeeService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([AtendeeEntity])],
  providers: [
    AtendeeRepository,
    AuthService,
    AuthAtendeeService,
    CreateAtendeeService,
    BcryptService,
  ],
  controllers: [AuthAtendeeController, CreateAtendeeController],
})
export class AtendeeModule {}
