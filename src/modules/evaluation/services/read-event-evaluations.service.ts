import { Injectable } from '@nestjs/common';

import { PageDto } from '../../../shared/pagination';
import { EventEvaluationsOutput } from '../output';
import { EvaluationRepository } from '../repositories';

@Injectable()
export class ReadEventsEvaluationsService {
  constructor(private readonly evaluationsRepository: EvaluationRepository) {}

  async execute(eventId: string): Promise<PageDto<EventEvaluationsOutput>> {
    return await this.evaluationsRepository.readByEventId(eventId);
  }
}
