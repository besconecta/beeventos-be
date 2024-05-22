import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../../shared/auth/auth.module';
import { AtendeeModule } from '../atendees/atendee.module';
import { EventModule } from '../events/event.module';
import { UserModule } from '../users/user.module';
import { CreateEvaluationController } from './controller';
import { EventsEvaluations } from './entities';
import { EvaluationRepository } from './repositories';
import { CreateEvaluationService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventsEvaluations]),
    UserModule,
    AuthModule,
    AtendeeModule,
    EventModule,
  ],
  providers: [EvaluationRepository, CreateEvaluationService],
  controllers: [CreateEvaluationController],
})
export class EvaluationModule {}
