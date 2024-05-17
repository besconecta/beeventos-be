import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { Events } from '../entities';
import { EventStatus } from '../enums';
import { CreateEventInput, EventsFilters } from '../input';
import { UpdateEventInput } from '../input/update-event.input';
import { EventOutput } from '../output';
import { eventsArrayMapper, eventsMapper } from './helpers/mappers';
import { queryEvents } from './helpers/query-builder';

@Injectable()
export class EventRepository {
  constructor(
    @InjectRepository(Events)
    private readonly repository: Repository<Events>,
  ) {}

  async create(input: CreateEventInput): Promise<EventOutput> {
    const createdEvent = await this.repository.save(input);
    return eventsMapper(createdEvent);
  }

  async readAll(filterOptions: EventsFilters): Promise<EventOutput[]> {
    const queryBuilder = this.repository.createQueryBuilder('events');
    queryEvents(filterOptions, queryBuilder);

    const { entities } = await queryBuilder.getRawAndEntities();
    return eventsArrayMapper(entities);
  }

  async readById(id: string): Promise<EventOutput> {
    const event = await this.repository.findOne({ where: { id: id } });
    return eventsMapper(event);
  }

  async readAvaliable(filterOptions: EventsFilters): Promise<EventOutput[]> {
    const queryBuilder = this.repository
      .createQueryBuilder('events')
      .where({ status: EventStatus.STARTED });

    queryEvents(filterOptions, queryBuilder);

    const { entities } = await queryBuilder.getRawAndEntities();
    return eventsArrayMapper(entities);
  }

  async update(id: string, input: UpdateEventInput): Promise<UpdateResult> {
    return await this.repository.update(id, input);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.softDelete(id);
  }
}
