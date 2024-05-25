import { Injectable, NotFoundException } from '@nestjs/common';

import { ReadUserByIdService } from '../../../modules/users/services';
import { ReadEventTypeByIdService } from '../events-types/services';
import { CreateEventInput } from '../input';
import { CreateEventOutput } from '../output';
import { EventRepository } from '../repositories';

@Injectable()
export class CreateEventService {
  constructor(
    private readonly eventRepository: EventRepository,
    private readonly readUserByIdService: ReadUserByIdService,
    private readonly readEventTypeByIdService: ReadEventTypeByIdService,
  ) {}

  async execute(input: CreateEventInput): Promise<CreateEventOutput> {
    const user = await this.readUserByIdService.execute(input.userId);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const eventType = await this.readEventTypeByIdService.execute(
      input.eventTypeId,
    );

    if (!eventType) {
      throw new NotFoundException('Tipo do evento não encontrado');
    }

    return await this.eventRepository.create(input);
  }
}
