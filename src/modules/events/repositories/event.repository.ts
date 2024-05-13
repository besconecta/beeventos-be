import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

import { Events } from '../entities';
import { CreateEventInput } from '../input';
import { CreateEventOutput } from '../output';

@Injectable()
export class EventRepository {
  constructor(
    @InjectRepository(Events)
    private readonly repository: Repository<Events>,
  ) {}

  async create(input: CreateEventInput): Promise<CreateEventOutput> {
    const createdEvent = await this.repository.save(input);

    return plainToClass(CreateEventOutput, createdEvent, {
      excludeExtraneousValues: true,
    });
  }
}
