import { Injectable } from '@nestjs/common';

import { EventStatus } from '../enums';
import { CreateEventInput } from '../input';
import { CreateEventOutput } from '../output';
import { EventRepository } from '../repositories';

@Injectable()
export class CreateEventService {
  constructor(private readonly eventRepository: EventRepository) {}

  async execute(input: CreateEventInput): Promise<CreateEventOutput> {
    return await this.eventRepository.create({
      ...input,
      status: EventStatus.IDLE,
    });
  }
}
