import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from '../../shared/auth/services/auth.service';
import { Users } from '../users/entities';
import { UserRepository } from '../users/repositories';
import { ReadUserByIdService } from '../users/services';
import { CreateEventController } from './controllers';
import { Events } from './entities';
import { EventTypeModule } from './events-types/event-type.module';
import { EventRepository } from './repositories';
import { CreateEventService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Events, Users]), EventTypeModule],
  providers: [
    UserRepository,
    AuthService,
    EventRepository,
    CreateEventService,
    ReadUserByIdService,
  ],
  controllers: [CreateEventController],
})
export class EventModule {}
