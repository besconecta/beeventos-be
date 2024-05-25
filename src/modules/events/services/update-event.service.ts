import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { UpdateEventInput } from '../input';
import { EventOutput } from '../output';
import { EventRepository } from '../repositories';

@Injectable()
export class UpdateEventService {
  constructor(private readonly eventRepository: EventRepository) {}

  async execute(id: string, input: UpdateEventInput): Promise<EventOutput> {
    const event = await this.eventRepository.readById(id);

    if (!event) {
      throw new NotFoundException(`Evento com id ${id} não encontrado`);
    }

    const updateResult = await this.eventRepository.update(event.id, input);
    if (updateResult.affected === 0) {
      throw new InternalServerErrorException(
        `Falha ao atualizar o evento com id ${id} `,
      );
    }

    return await this.eventRepository.readById(event.id);
  }
}
