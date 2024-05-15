import { Injectable } from '@nestjs/common';

import { EventTypeOutput } from '../output';
import { EventTypeRepository } from '../repositories';

@Injectable()
export class ReadEventTypeByIdService {
  constructor(private readonly eventTypeRepository: EventTypeRepository) {}

  async execute(eventTypeId: string): Promise<EventTypeOutput> {
    return await this.eventTypeRepository.readById(eventTypeId);
  }
}
