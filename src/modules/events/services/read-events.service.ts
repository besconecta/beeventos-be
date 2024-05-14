import { Injectable } from '@nestjs/common';

import { EventOutput } from '../output';
import { EventRepository } from '../repositories';

@Injectable()
export class ReadEventsService {
  constructor(private readonly eventRepository: EventRepository) {}

  async execute(): Promise<EventOutput[]> {
    return await this.eventRepository.readAll();
  }
}
