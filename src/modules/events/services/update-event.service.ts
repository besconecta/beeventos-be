import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateResult } from 'typeorm';

import { UpdateEventInput } from '../input';
import { EventRepository } from '../repositories';

@Injectable()
export class UpdateEventService {
  constructor(private readonly eventRepository: EventRepository) {}

  async execute(id: string, input: UpdateEventInput): Promise<UpdateResult> {
    const event = await this.eventRepository.readById(id);

    if (!event) {
      throw new NotFoundException('Evento não encontrado');
    }
    return await this.eventRepository.update(event.id, input);
  }
}
