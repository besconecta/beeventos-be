import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Evaluations } from '../entities';
import { CreateEvaluationInput } from '../input';

@Injectable()
export class EvaluationRepository {
  constructor(
    @InjectRepository(Evaluations)
    private readonly repository: Repository<Evaluations>,
  ) {}

  async createEvaluation(
    eventId: string,
    input: CreateEvaluationInput,
  ): Promise<Evaluations> {
    const eventEvaluation = this.repository.create({
      event: { id: eventId },
      atendee: { id: input.atendeeId },
    });
    return await this.repository.save(eventEvaluation);
  }
}
