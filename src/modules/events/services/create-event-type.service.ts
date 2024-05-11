import { Injectable } from '@nestjs/common';

import { EventTypeInput } from '../input';
import { EventTypeOutput } from '../output';
import { EventTypeRepository } from '../repositories';

@Injectable()
export class CreateEventTypeService {
  constructor(private readonly eventTypeRepository: EventTypeRepository) {}

  async execute(input: EventTypeInput): Promise<EventTypeOutput> {
    return await this.eventTypeRepository.create(input);
  }
}
