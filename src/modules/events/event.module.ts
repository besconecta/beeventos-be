import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/shared/auth/services/auth.service';

import { CreateEventController } from './controllers';
import { Events } from './entities';
import { EventTypeModule } from './events-types/event-type.module';
import { EventRepository } from './repositories';
import { CreateEventService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Events]), EventTypeModule],
  providers: [AuthService, EventRepository, CreateEventService],
  controllers: [CreateEventController],
})
export class EventModule {}
