import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from '../../../shared/auth/services/auth.service';
import {
  CreateEventTypeController,
  ReadEventsTypesController,
  UpdateEventTypeController,
} from './controllers';
import { EventTypeEntity } from './entities';
import { EventTypeRepository } from './repositories';
import {
  CreateEventTypeService,
  ReadEventsTypesService,
  UpdateEventTypeService,
} from './services';

@Module({
  imports: [TypeOrmModule.forFeature([EventTypeEntity])],
  providers: [
    AuthService,
    CreateEventTypeService,
    EventTypeRepository,
    ReadEventsTypesService,
    UpdateEventTypeService,
  ],
  controllers: [
    CreateEventTypeController,
    ReadEventsTypesController,
    UpdateEventTypeController,
  ],
})
export class EventTypeModule {}
