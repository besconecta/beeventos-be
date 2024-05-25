import { Injectable } from '@nestjs/common';

import { EventOutput } from '../output';
import { EventRepository } from '../repositories';

@Injectable()
export class ReadEventByIdService {
  constructor(private readonly eventRepository: EventRepository) {}

  async execute(id: string): Promise<EventOutput> {
    return await this.eventRepository.readById(id);
  }
}
