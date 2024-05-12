import { Injectable, NotFoundException } from '@nestjs/common';
import { DeleteResult } from 'typeorm';

import { EventTypeRepository } from '../repositories';

@Injectable()
export class DeleteEventTypeService {
  constructor(private readonly eventTypeRepository: EventTypeRepository) {}

  async execute(id: string): Promise<DeleteResult> {
    const eventTypeExists = await this.eventTypeRepository.readById(id);

    if (!eventTypeExists) {
      throw new NotFoundException('Tipo de evento não encontrado');
    }

    return await this.eventTypeRepository.delete(eventTypeExists.id);
  }
}
