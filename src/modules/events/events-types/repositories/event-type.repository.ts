import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

import { EventTypeEntity } from '../entities';
import { EventTypeInput } from '../input';
import { EventTypeOutput } from '../output';

@Injectable()
export class EventTypeRepository {
  constructor(
    @InjectRepository(EventTypeEntity)
    private readonly repository: Repository<EventTypeEntity>,
  ) {}

  async create(input: EventTypeInput): Promise<EventTypeOutput> {
    const eventType = await this.repository.save(input);
    return plainToClass(EventTypeOutput, eventType, {
      excludeExtraneousValues: true,
    });
  }

  async readAll(): Promise<EventTypeOutput[]> {
    const eventsTypes = await this.repository.find();

    return eventsTypes.map((eventType) => {
      return plainToClass(EventTypeOutput, eventType, {
        excludeExtraneousValues: true,
      });
    });
  }
}
