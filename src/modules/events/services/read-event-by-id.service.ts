import { Injectable } from '@nestjs/common';

import { EventRepository } from '../repositories';

@Injectable()
export class ReadEventByIdService {
  constructor(private readonly eventRepository: EventRepository) {}

  async execute(id: string) {
    return await this.eventRepository.readById(id);
  }
}
