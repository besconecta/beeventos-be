import { Injectable } from '@nestjs/common';

import { Atendees } from '../entities';
import { AtendeeRepository } from '../repositories';

@Injectable()
export class ReadAtendeeByIdService {
  constructor(private readonly atendeeRepository: AtendeeRepository) {}

  async execute(atendeeId: string): Promise<Atendees> {
    return await this.atendeeRepository.readById(atendeeId);
  }
}
