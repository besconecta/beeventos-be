import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateResult } from 'typeorm';

import { UpdateEventTypeInput } from '../input';
import { EventTypeRepository } from '../repositories';

@Injectable()
export class UpdateEventTypeService {
  constructor(private readonly eventTypeRepository: EventTypeRepository) {}

  async execute(
    id: string,
    input: UpdateEventTypeInput,
  ): Promise<UpdateResult> {
    const eventTypeExists = await this.eventTypeRepository.readById(id);

    if (!eventTypeExists) {
      throw new NotFoundException('Tipo de evento não encontrado');
    }

    return await this.eventTypeRepository.update(eventTypeExists.id, input);
  }
}
