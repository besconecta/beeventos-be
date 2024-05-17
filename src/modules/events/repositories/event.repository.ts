import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { Events } from '../entities';
import { EventStatus } from '../enums';
import { CreateEventInput, EventsFilters } from '../input';
import { UpdateEventInput } from '../input/update-event.input';
import { EventOutput } from '../output';
import { eventsArrayMapper, eventsMapper } from './mappers';

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

  async readAll(): Promise<EventOutput[]> {
    const events = await this.repository.find();
    return eventsArrayMapper(events);
  }

  async readById(id: string): Promise<EventOutput> {
    const event = await this.repository.findOne({ where: { id: id } });
    return eventsMapper(event);
  }

  async readAvaliable(filterOptions: EventsFilters): Promise<EventOutput[]> {
    if (filterOptions) {
      const queryBuilder = this.repository
        .createQueryBuilder('events')
        .where({ status: EventStatus.STARTED });

      Object.entries(filterOptions).forEach(([key, value]) => {
        if (value) {
          queryBuilder.andWhere(`UPPER(events.${key}) LIKE UPPER(:${key})`, {
            [key]: `%${value}%`,
          });
        }
      });

      const { entities } = await queryBuilder.getRawAndEntities();
      return eventsArrayMapper(entities);
    }
    return await this.repository.find({
      where: { status: EventStatus.STARTED },
    });
  }

  async update(id: string, input: UpdateEventInput): Promise<UpdateResult> {
    return await this.repository.update(id, input);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.softDelete(id);
  }
}
