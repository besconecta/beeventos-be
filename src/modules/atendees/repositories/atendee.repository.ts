import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

import { AtendeeEntity } from '../entities';
import { CreateAtendeeInput } from '../input';
import { AtendeeAccountOutput } from '../output';

@Injectable()
export class AtendeeRepository {
  constructor(
    @InjectRepository(AtendeeEntity)
    private readonly repository: Repository<AtendeeEntity>,
  ) {}

  async create(input: CreateAtendeeInput): Promise<AtendeeAccountOutput> {
    const atendeeAccount = await this.repository.save(input);
    return plainToClass(AtendeeAccountOutput, atendeeAccount, {
      excludeExtraneousValues: true,
    });
  }
  async findByEmail(atendeeEmail: string): Promise<AtendeeEntity> {
    return await this.repository.findOne({ where: { email: atendeeEmail } });
  }
}
