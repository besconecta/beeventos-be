import { Injectable } from '@nestjs/common';

import { Evaluations } from '../entities';
import { CreateEvaluationInput } from '../input';
import { EvaluationRepository } from '../repositories';

@Injectable()
export class CreateEvaluationService {
  constructor(private readonly evaluationRepository: EvaluationRepository) {}

  async execute(
    eventId: string,
    input: CreateEvaluationInput,
  ): Promise<Evaluations> {
    return await this.evaluationRepository.createEvaluation(eventId, input);
  }
}
