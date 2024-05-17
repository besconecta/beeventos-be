import { Injectable } from '@nestjs/common';

import { EventsFilters } from '../input';
import { EventOutput } from '../output';
import { EventRepository } from '../repositories';

@Injectable()
export class ReadEventsService {
  constructor(private readonly eventRepository: EventRepository) {}

  async execute(filterOptions: EventsFilters): Promise<EventOutput[]> {
    return await this.eventRepository.readAll(filterOptions);
  }
}
