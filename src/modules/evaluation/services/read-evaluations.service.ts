import { Injectable } from '@nestjs/common';

import { EvaluationFilters } from '../input';
import { EvaluationRepository } from '../repositories';

@Injectable()
export class ReadEvaluationsService {
  constructor(private readonly evaluationsRepository: EvaluationRepository) {}

  async execute(filterOptions: EvaluationFilters) {
    return await this.evaluationsRepository.readAll(filterOptions);
  }
}
