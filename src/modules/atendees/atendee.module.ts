import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../../shared/auth/auth.module';
import { AuthAtendeeController, CreateAtendeeController } from './controllers';
import { Atendees } from './entities';
import { AtendeeRepository } from './repositories';
import {
  AuthAtendeeService,
  CreateAtendeeService,
  ReadAtendeeByIdService,
} from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Atendees]), AuthModule],
  providers: [
    AtendeeRepository,
    AuthAtendeeService,
    CreateAtendeeService,
    ReadAtendeeByIdService,
  ],
  controllers: [AuthAtendeeController, CreateAtendeeController],
  exports: [ReadAtendeeByIdService],
})
export class AtendeeModule {}
