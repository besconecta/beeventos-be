import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from '../../shared/auth/services/auth.service';
import { UserModule } from '../users/user.module';
import {
  CreateEventController,
  ReadEventByIdController,
  ReadEventsController,
} from './controllers';
import { UpdateEventController } from './controllers/update-event.controller';
import { Events } from './entities';
import { EventTypeModule } from './events-types/event-type.module';
import { EventRepository } from './repositories';
import {
  CreateEventService,
  ReadEventByIdService,
  ReadEventsService,
  UpdateEventService,
} from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Events]), EventTypeModule, UserModule],
  providers: [
    AuthService,
    EventRepository,
    CreateEventService,
    ReadEventsService,
    ReadEventByIdService,
    UpdateEventService,
  ],
  controllers: [
    CreateEventController,
    ReadEventsController,
    ReadEventByIdController,
    UpdateEventController,
  ],
})
export class EventModule {}
