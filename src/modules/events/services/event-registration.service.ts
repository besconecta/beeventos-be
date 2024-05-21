import {
  BadRequestException,
  ConflictException,
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

  async execute(
    eventId: string,
    input: EventRegistrationInput,
  ): Promise<EventsAtendees> {
    const atendee = await this.readAtendeeByIdService.execute(input.atendeeId);
    const event = await this.readEventByIdService.execute(eventId);

    if (!event) {
      throw new NotFoundException('Evento não encontrado');
    }

    if (!atendee) {
      throw new NotFoundException('Participante não encontrado');
    }

    if (event.status === EventStatus.FINISHED) {
      throw new BadRequestException('Este evento já foi finalizado');
    }

    const existingRegistration =
      await this.eventsAtendeesRepository.readEventAtendee(
        event.id,
        atendee.id,
      );

    if (existingRegistration) {
      throw new ConflictException(
        'Participante já está registrado para este evento',
      );
    }

    return await this.eventsAtendeesRepository.register(event.id, atendee.id);
  }
}
