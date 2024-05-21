import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { ReadAtendeeByIdService } from '../../../modules/atendees/services';
import { EventsAtendees } from '../entities';
import { EventStatus } from '../enums';
import { EventRegistrationInput } from '../input';
import { EventsAtendeesRepository } from '../repositories';
import { ReadEventByIdService } from './read-event-by-id.service';

@Injectable()
export class EventRegistrationService {
  constructor(
    private readonly eventsAtendeesRepository: EventsAtendeesRepository,
    private readonly readEventByIdService: ReadEventByIdService,
    private readonly readAtendeeByIdService: ReadAtendeeByIdService,
  ) {}

  async execute(input: EventRegistrationInput): Promise<EventsAtendees> {
    const atendee = await this.readAtendeeByIdService.execute(input.atendeeId);
    const event = await this.readEventByIdService.execute(input.eventId);

    if (!event) {
      throw new NotFoundException('Evento não encontrado');
    }

    if (event.status === EventStatus.FINISHED) {
      throw new BadRequestException('Este evento já foi finalizado');
    }

    return await this.eventsAtendeesRepository.register({
      eventId: event.id,
      atendeeId: atendee.id,
    });
  }
}
