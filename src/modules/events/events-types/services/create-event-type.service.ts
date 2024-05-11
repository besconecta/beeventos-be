import { Injectable } from '@nestjs/common';

import { CreateEventTypeInput } from '../input';
import { EventTypeOutput } from '../output';
import { EventTypeRepository } from '../repositories';

@Injectable()
export class CreateEventTypeService {
  constructor(private readonly eventTypeRepository: EventTypeRepository) {}

  async execute(input: CreateEventTypeInput): Promise<EventTypeOutput> {
    return await this.eventTypeRepository.create(input);
  }
}
