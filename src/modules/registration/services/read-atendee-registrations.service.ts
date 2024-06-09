import { Injectable } from '@nestjs/common';

import { PageDto } from '../../../shared/pagination';
import { AtendeeRegistrationsOutput } from '../output';
import { EventsAtendeesRepository } from '../repositories';

@Injectable()
export class ReadAtendeeRegistrationsService {
  constructor(
    private readonly eventsAtendeesRepository: EventsAtendeesRepository,
  ) {}

  async execute(
    atendeeId: string,
  ): Promise<PageDto<AtendeeRegistrationsOutput>> {
    return await this.eventsAtendeesRepository.readParticipateEvents(atendeeId);
  }
}
