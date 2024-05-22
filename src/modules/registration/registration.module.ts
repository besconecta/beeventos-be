import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AtendeeModule } from '../atendees/atendee.module';
import { EventModule } from '../events/event.module';
import { EventRegistrationController } from './controllers';
import { EventsAtendees } from './entities';
import { EventsAtendeesRepository } from './repositories';
import { EventRegistrationService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventsAtendees]),
    AtendeeModule,
    EventModule,
  ],
  providers: [EventsAtendeesRepository, EventRegistrationService],
  controllers: [EventRegistrationController],
})
export class RegistrationModule {}
