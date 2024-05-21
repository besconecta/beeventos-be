import { Injectable } from '@nestjs/common';

import { Events } from '../entities';
import { EventRepository } from '../repositories';

@Injectable()
export class ReadEventByIdService {
  constructor(private readonly eventRepository: EventRepository) {}

  async execute(id: string): Promise<Events> {
    return await this.eventRepository.readById(id);
  }
}
