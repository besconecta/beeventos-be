import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EventsAtendees } from '../entities';

@Injectable()
export class EventsAtendeesRepository {
  constructor(
    @InjectRepository(EventsAtendees)
    private readonly repository: Repository<EventsAtendees>,
  ) {}

  async register(eventId: string, atendeeId: string): Promise<EventsAtendees> {
    const eventAtendee = this.repository.create({
      event: { id: eventId },
      atendee: { id: atendeeId },
    });

    return await this.repository.save(eventAtendee);
  }

  async readEventAtendee(
    eventId: string,
    atendeeId: string,
  ): Promise<EventsAtendees> {
    return await this.repository.findOne({
      where: { event: { id: eventId }, atendee: { id: atendeeId } },
    });
  }
}
