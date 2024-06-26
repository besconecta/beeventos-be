import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from '../../../modules/users/user.module';
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
  ReadEventTypeByIdService,
  UpdateEventTypeService,
} from './services';

@Module({
  imports: [TypeOrmModule.forFeature([EventsTypes]), UserModule],
  providers: [
    AuthService,
    CreateEventTypeService,
    DeleteEventTypeService,
    EventTypeRepository,
    ReadEventsTypesService,
    ReadEventTypeByIdService,
    UpdateEventTypeService,
  ],
  controllers: [
    CreateEventTypeController,
    DeleteEventTypeController,
    ReadEventsTypesController,
    UpdateEventTypeController,
  ],
  exports: [ReadEventTypeByIdService],
})
export class EventTypeModule {}
