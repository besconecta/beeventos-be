import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PageDto, PageMetaDto, PageOptionsDto } from 'src/shared/pagination';
import { Repository } from 'typeorm';

import { EventsRegistrations } from '../entities';

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

    return new PageDto(entities, pageMetaDto);

    // return await this.repository.find({
    //   where: {
    //     atendee: { id: atendeeId },
    //   },
    //   relations: ['event'],
    // });
  }
}
