import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

import { EventRepository } from '../repositories';

@Injectable()
export class DeleteEventService {
  constructor(private readonly eventRepository: EventRepository) {}

  async execute(id: string): Promise<DeleteResult> {
    const event = await this.eventRepository.readById(id);

    if (!event) {
      throw new NotFoundException('Evento não encontrado');
    }
    return await this.eventRepository.delete(event.id);
  }
}
