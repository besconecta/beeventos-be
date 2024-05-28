import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../../shared/auth/auth.module';
import { AtendeeModule } from '../atendees/atendee.module';
import { EventModule } from '../events/event.module';
import { UserModule } from '../users/user.module';
import {
  CreateEvaluationController,
  ReadEvaluationsController,
} from './controller';
import { EventsEvaluations } from './entities';
import { EvaluationRepository } from './repositories';
import { CreateEvaluationService, ReadEvaluationsService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventsEvaluations]),
    UserModule,
    AuthModule,
    AtendeeModule,
    EventModule,
  ],
  providers: [
    EvaluationRepository,
    CreateEvaluationService,
    ReadEvaluationsService,
  ],
  controllers: [CreateEvaluationController, ReadEvaluationsController],
})
export class EvaluationModule {}
