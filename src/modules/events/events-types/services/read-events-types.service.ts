import { Injectable } from '@nestjs/common';

import { EventTypeRepository } from '../repositories';

@Injectable()
export class ReadEventsTypesService {
  constructor(private readonly eventTypeRepository: EventTypeRepository) {}

  async execute() {
    return await this.eventTypeRepository.readAll();
  }
}
