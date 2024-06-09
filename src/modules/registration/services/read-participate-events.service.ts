import { Injectable } from '@nestjs/common';

import { EventsAtendeesRepository } from '../repositories';

@Injectable()
export class ReadParticipateEventsService {
  constructor(
    private readonly eventsAtendeesRepository: EventsAtendeesRepository,
  ) {}

  async execute(atendeeId: string) {
    return await this.eventsAtendeesRepository.readParticipateEvents(atendeeId);
  }
}
