import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CreateEvaluationController } from './controller';
import { Evaluations } from './entities';
import { EvaluationRepository } from './repositories';
import { CreateEvaluationService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Evaluations])],
  providers: [EvaluationRepository, CreateEvaluationService],
  controllers: [CreateEvaluationController],
})
export class EvaluationModule {}
