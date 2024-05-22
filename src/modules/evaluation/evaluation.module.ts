import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AtendeeModule } from '../atendees/atendee.module';
import { EventModule } from '../events/event.module';
import { CreateEvaluationController } from './controller';
import { Evaluations } from './entities';
import { EvaluationRepository } from './repositories';
import { CreateEvaluationService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([Evaluations]),
    AtendeeModule,
    EventModule,
  ],
  providers: [EvaluationRepository, CreateEvaluationService],
  controllers: [CreateEvaluationController],
})
export class EvaluationModule {}
