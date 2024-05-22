import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EventsEvaluations } from '../entities';
import { CreateEvaluationInput } from '../input';

@Injectable()
export class EvaluationRepository {
  constructor(
    @InjectRepository(EventsEvaluations)
    private readonly repository: Repository<EventsEvaluations>,
  ) {}

  async evaluate(
    eventId: string,
    input: CreateEvaluationInput,
  ): Promise<EventsEvaluations> {
    const eventEvaluation = this.repository.create({
      ...input,
      event: { id: eventId },
      atendee: { id: input.atendeeId },
    });
    return await this.repository.save(eventEvaluation);
  }

  async readAtendeeEvaluation(
    eventId: string,
    atendeeId: string,
  ): Promise<EventsEvaluations> {
    return await this.repository.findOne({
      where: { event: { id: eventId }, atendee: { id: atendeeId } },
    });
  }
}
