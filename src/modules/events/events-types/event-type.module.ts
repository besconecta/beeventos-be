import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from '../../../shared/auth/services/auth.service';
import {
  CreateEventTypeController,
  ReadEventsTypesController,
} from './controllers';
import { EventTypeEntity } from './entities';
import { EventTypeRepository } from './repositories';
import { CreateEventTypeService, ReadEventsTypesService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([EventTypeEntity])],
  providers: [
    AuthService,
    CreateEventTypeService,
    EventTypeRepository,
    ReadEventsTypesService,
  ],
  controllers: [CreateEventTypeController, ReadEventsTypesController],
})
export class EventTypeModule {}
