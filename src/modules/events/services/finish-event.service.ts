import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateResult } from 'typeorm';

import { EventStatus } from '../enums';
import { EventRepository } from '../repositories';

@Injectable()
export class FinishEventService {
  constructor(private readonly eventRepository: EventRepository) {}

  async execute(id: string): Promise<UpdateResult> {
    const event = await this.eventRepository.readById(id);

    if (event.status === EventStatus.FINISHED) {
      throw new BadRequestException('Este evento já foi finalizado ');
    }

    if (!event) {
      throw new NotFoundException(`Evento com id ${id} não encontrado`);
    }

    const finishResult = await this.eventRepository.finish(event.id);
    if (finishResult.affected === 0) {
      throw new InternalServerErrorException(
        `Falha ao finalizar o evento com id ${id} `,
      );
    }
    return finishResult;
  }
}
