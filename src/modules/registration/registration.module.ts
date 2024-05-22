import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../../shared/auth/auth.module';
import { AtendeeModule } from '../atendees/atendee.module';
import { EventModule } from '../events/event.module';
import { UserModule } from '../users/user.module';
import { EventRegistrationController } from './controllers';
import { EventsRegistrations } from './entities';
import { EventsAtendeesRepository } from './repositories';
import { EventRegistrationService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventsRegistrations]),
    UserModule,
    AuthModule,
    AtendeeModule,
    EventModule,
  ],
  providers: [EventsAtendeesRepository, EventRegistrationService],
  controllers: [EventRegistrationController],
})
export class RegistrationModule {}
