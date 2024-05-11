import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateEventTypeController } from './controllers';
import { EventTypeEntity } from './entities';
import { EventTypeRepository } from './repositories';
import { CreateEventTypeService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([EventTypeEntity])],
  providers: [CreateEventTypeService, EventTypeRepository],
  controllers: [CreateEventTypeController],
})
export class EventTypeModule {}
