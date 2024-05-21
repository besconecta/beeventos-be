import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

import { Atendees } from '../entities';
import { CreateAtendeeInput } from '../input';
import { AtendeeAccountOutput } from '../output';

@Injectable()
export class AtendeeRepository {
  constructor(
    @InjectRepository(Atendees)
    private readonly repository: Repository<Atendees>,
  ) {}

  async create(input: CreateAtendeeInput): Promise<AtendeeAccountOutput> {
    const atendeeAccount = await this.repository.save(input);
    return plainToClass(AtendeeAccountOutput, atendeeAccount, {
      excludeExtraneousValues: true,
    });
  }
  async readByEmail(atendeeEmail: string): Promise<Atendees> {
    return await this.repository.findOne({ where: { email: atendeeEmail } });
  }

  async readById(atendeeId: string): Promise<Atendees> {
    return await this.repository.findOne({ where: { id: atendeeId } });
  }
}
