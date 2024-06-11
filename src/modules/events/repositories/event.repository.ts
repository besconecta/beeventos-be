import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import {
  PageDto,
  PageMetaDto,
  PageOptionsDto,
} from '../../../shared/pagination';
import { Events } from '../entities';
import { EventStatus } from '../enums';
import { CreateEventInput, EventsFilters } from '../input';
import { UpdateEventInput } from '../input/update-event.input';
import { CreateEventOutput, EventOutput } from '../output';
import { eventsArrayMapper, eventsMapper } from './helpers/mappers';
import { queryEvents } from './helpers/query-builder';

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

  async readAll(filterOptions: EventsFilters): Promise<PageDto<EventOutput>> {
    const pageOptionsDto = new PageOptionsDto();

    const queryBuilder = this.repository.createQueryBuilder('events');

    const query = queryEvents(filterOptions, queryBuilder);
    query
      .orderBy('events.startAt', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await query.getCount();
    const { entities } = await query.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({
      itemCount,
      pageOptionsDto,
    });

    return new PageDto(eventsArrayMapper(entities), pageMetaDto);
  }

  async readById(id: string): Promise<any> {
    const queryBuilder = this.repository
      .createQueryBuilder('events')
      .leftJoinAndSelect('events.eventType', 'eventType')
      .leftJoinAndSelect('events.user', 'user')
      .where({ id: id });

    const event = await queryBuilder.getOne();
    return eventsMapper(event);
  }

  async readAvaliable(
    filterOptions: EventsFilters,
  ): Promise<PageDto<EventOutput>> {
    const pageOptionsDto = new PageOptionsDto();

    const queryBuilder = this.repository
      .createQueryBuilder('events')
      .where('events.status != :finished', { finished: EventStatus.FINISHED });

    const query = queryEvents(filterOptions, queryBuilder);
    query
      .orderBy('events.startAt', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await query.getCount();
    const { entities } = await query.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({
      itemCount,
      pageOptionsDto,
    });

    return new PageDto(eventsArrayMapper(entities), pageMetaDto);
  }

  async update(id: string, input: UpdateEventInput): Promise<UpdateResult> {
    return await this.repository.update(id, input);
  }

  async finish(id: string): Promise<UpdateResult> {
    return await this.repository.update(id, {
      status: EventStatus.FINISHED,
    });
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.softDelete(id);
  }
}
