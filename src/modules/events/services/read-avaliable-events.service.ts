import { Injectable } from '@nestjs/common';

import { PageDto } from '../../../shared/pagination';
import { EventsFilters } from '../input';
import { EventOutput } from '../output';
import { EventRepository } from '../repositories';

@Injectable()
export class ReadAvaliableEventsService {
  constructor(private readonly eventRepository: EventRepository) {}

  async execute(filterOptions: EventsFilters): Promise<PageDto<EventOutput>> {
    return await this.eventRepository.readAvaliable(filterOptions);
  }
}
