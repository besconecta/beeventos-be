import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EventsRegistrations } from '../entities';

@Injectable()
export class EventsAtendeesRepository {
  constructor(
    @InjectRepository(EventsRegistrations)
    private readonly repository: Repository<EventsRegistrations>,
  ) {}

  async register(
    eventId: string,
    atendeeId: string,
  ): Promise<EventsRegistrations> {
    const eventAtendee = this.repository.create({
      event: { id: eventId },
      atendee: { id: atendeeId },
    });

    return await this.repository.save(eventAtendee);
  }

  async readEventAtendee(
    eventId: string,
    atendeeId: string,
  ): Promise<EventsRegistrations> {
    return await this.repository.findOne({
      where: { event: { id: eventId }, atendee: { id: atendeeId } },
    });
  }
}
