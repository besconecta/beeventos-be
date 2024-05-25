import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import { EventRepository } from '../repositories';

@Injectable()
export class DeleteEventService {
  constructor(private readonly eventRepository: EventRepository) {}

  async execute(id: string): Promise<void> {
    const event = await this.eventRepository.readById(id);

    if (!event) {
      throw new NotFoundException(`Evento com id ${id} não encontrado`);
    }

    const deleteResult = await this.eventRepository.delete(event.id);
    if (deleteResult.affected === 0) {
      throw new InternalServerErrorException(
        `Falha ao deletar o evento com id ${id} `,
      );
    }
  }
}
