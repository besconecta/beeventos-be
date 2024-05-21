import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EventsAtendees } from '../entities';
import { EventRegistrationInput } from '../input';

@Injectable()
export class EventsAtendeesRepository {
  constructor(
    @InjectRepository(EventsAtendees)
    private readonly repository: Repository<EventsAtendees>,
  ) {}

  async register(input: EventRegistrationInput): Promise<EventsAtendees> {
    const eventAtendee = this.repository.create({
      event: { id: input.eventId },
      atendee: { id: input.atendeeId },
    });

    return await this.repository.save(eventAtendee);
  }
}
