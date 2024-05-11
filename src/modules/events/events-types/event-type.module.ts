import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from '../../../shared/auth/services/auth.service';
import { CreateEventTypeController } from './controllers';
import { EventTypeEntity } from './entities';
import { EventTypeRepository } from './repositories';
import { CreateEventTypeService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([EventTypeEntity])],
  providers: [AuthService, CreateEventTypeService, EventTypeRepository],
  controllers: [CreateEventTypeController],
})
export class EventTypeModule {}
