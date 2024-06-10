import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageDto, PageMetaDto, PageOptionsDto } from 'src/shared/pagination';
import { Repository } from 'typeorm';

import { EventsRegistrations } from '../entities';
import { atendeeRegistrationsArrayMapper } from './helpers/mappers/atendee-registrations-array.mapper';

@Injectable()
export class EventsAtendeesRepository {
  constructor(
    @InjectRepository(EventsRegistrations)
    private readonly repository: Repository<EventsRegistrations>,
  ) {}

  async register(
    eventId: string,
    atendeeId: string,
  ): Promise<EventsRegistrations> {
    const eventAtendee = this.repository.create({
      event: { id: eventId },
      atendee: { id: atendeeId },
    });

    return await this.repository.save(eventAtendee);
  }

  async readEventAtendee(
    eventId: string,
    atendeeId: string,
  ): Promise<EventsRegistrations> {
    return await this.repository.findOne({
      where: { event: { id: eventId }, atendee: { id: atendeeId } },
    });
  }

  async readParticipateEvents(atendeeId: string) {
    const pageOptionsDto = new PageOptionsDto();
    const queryBuilder = this.repository
      .createQueryBuilder('events_registrations')
      .leftJoinAndSelect('events_registrations.event', 'event')
      .leftJoinAndSelect('event.user', 'user')
      .where({
        atendee: { id: atendeeId },
      })
      .orderBy('events_registrations.createdAt', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({
      itemCount,
      pageOptionsDto,
    });

    return new PageDto(atendeeRegistrationsArrayMapper(entities), pageMetaDto);
  }
}
