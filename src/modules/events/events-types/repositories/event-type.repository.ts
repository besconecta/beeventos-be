import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { EventsTypes } from '../entities';
import { CreateEventTypeInput, UpdateEventTypeInput } from '../input';
import { EventTypeOutput } from '../output';
import { eventsTypesArrayMapper, eventsTypesMapper } from './mappers';

@Injectable()
export class EventTypeRepository {
  constructor(
    @InjectRepository(EventsTypes)
    private readonly repository: Repository<EventsTypes>,
  ) {}

  async create(input: CreateEventTypeInput): Promise<EventTypeOutput> {
    return await this.repository.save(input);
  }

  async readAll(): Promise<EventTypeOutput[]> {
    const eventsTypes = await this.repository.find();
    return eventsTypesArrayMapper(eventsTypes);
  }

  async readById(id: string): Promise<EventTypeOutput> {
    const eventType = await this.repository.findOne({ where: { id } });
    return eventsTypesMapper(eventType);
  }

  async update(id: string, input: UpdateEventTypeInput): Promise<UpdateResult> {
    return await this.repository.update(id, input);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.softDelete(id);
  }
}
