import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from '../../shared/auth/services/auth.service';
import { AtendeeModule } from '../atendees/atendee.module';
import { UserModule } from '../users/user.module';
import {
  CreateEventController,
  DeleteEventController,
  ReadAvaliableEventsController,
  ReadEventByIdController,
  ReadEventsController,
} from './controllers';
import { UpdateEventController } from './controllers/update-event.controller';
import { Events } from './entities';
import { EventTypeModule } from './events-types/event-type.module';
import { EventRepository } from './repositories';
import {
  CreateEventService,
  DeleteEventService,
  ReadAvaliableEventsService,
  ReadEventByIdService,
  ReadEventsService,
  UpdateEventService,
} from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([Events]),
    EventTypeModule,
    UserModule,
    AtendeeModule,
  ],
  providers: [
    AuthService,
    EventRepository,
    CreateEventService,
    ReadEventByIdService,
    ReadAvaliableEventsService,
    ReadEventsService,
    ReadEventByIdService,
    UpdateEventService,
    DeleteEventService,
  ],
  controllers: [
    CreateEventController,
    ReadAvaliableEventsController,
    ReadEventsController,
    ReadEventByIdController,
    UpdateEventController,
    DeleteEventController,
  ],
  exports: [ReadEventByIdService],
})
export class EventModule {}
