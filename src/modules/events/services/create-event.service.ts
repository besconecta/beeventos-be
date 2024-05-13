import { Injectable, NotFoundException } from '@nestjs/common';

import { ReadUserByIdService } from '../../../modules/users/services';
import { EventStatus } from '../enums';
import { CreateEventInput } from '../input';
import { CreateEventOutput } from '../output';
import { EventRepository } from '../repositories';

@Injectable()
export class CreateEventService {
  constructor(
    private readonly eventRepository: EventRepository,
    private readonly readUserByIdService: ReadUserByIdService,
  ) {}

  async execute(input: CreateEventInput): Promise<CreateEventOutput> {
    const user = await this.readUserByIdService.execute(input.userId);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return await this.eventRepository.create({
      ...input,
      status: EventStatus.IDLE,
    });
  }
}
