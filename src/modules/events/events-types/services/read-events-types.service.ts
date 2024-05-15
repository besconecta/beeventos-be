import { Injectable } from '@nestjs/common';

import { EventTypeOutput } from '../output';
import { EventTypeRepository } from '../repositories';

@Injectable()
export class ReadEventsTypesService {
  constructor(private readonly eventTypeRepository: EventTypeRepository) {}

  async execute(): Promise<EventTypeOutput[]> {
    return await this.eventTypeRepository.readAll();
  }
}
