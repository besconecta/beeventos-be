import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from '../../../shared/auth/services/auth.service';
import {
  CreateEventTypeController,
  DeleteEventTypeController,
  ReadEventsTypesController,
  UpdateEventTypeController,
} from './controllers';
import { EventsTypes } from './entities';
import { EventTypeRepository } from './repositories';
import {
  CreateEventTypeService,
  DeleteEventTypeService,
  ReadEventsTypesService,
  UpdateEventTypeService,
} from './services';

@Module({
  imports: [TypeOrmModule.forFeature([EventsTypes])],
  providers: [
    AuthService,
    CreateEventTypeService,
    DeleteEventTypeService,
    EventTypeRepository,
    ReadEventsTypesService,
    UpdateEventTypeService,
  ],
  controllers: [
    CreateEventTypeController,
    DeleteEventTypeController,
    ReadEventsTypesController,
    UpdateEventTypeController,
  ],
})
export class EventTypeModule {}
