import { Injectable } from '@nestjs/common';

import { PageDto } from '../../../shared/pagination';
import { EvaluationFilters } from '../input';
import { EventEvaluationsOutput } from '../output';
import { EvaluationRepository } from '../repositories';

@Injectable()
export class ReadEventsEvaluationsService {
  constructor(private readonly evaluationsRepository: EvaluationRepository) {}

  async execute(
    filterOptions: EvaluationFilters,
    eventId: string,
  ): Promise<PageDto<EventEvaluationsOutput>> {
    return await this.evaluationsRepository.readByEventId(
      filterOptions,
      eventId,
    );
  }
}
