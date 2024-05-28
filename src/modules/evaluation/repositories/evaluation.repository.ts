import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import {
  PageDto,
  PageMetaDto,
  PageOptionsDto,
} from '../../../shared/pagination';
import { EventsEvaluations } from '../entities';
import { CreateEvaluationInput, EvaluationFilters } from '../input';
import { evaluationsArrayMapper } from './helpers/mappers';
import { queryEvaluations } from './helpers/query-builder';

@Injectable()
export class EvaluationRepository {
  constructor(
    @InjectRepository(EventsEvaluations)
    private readonly repository: Repository<EventsEvaluations>,
  ) {}

  async evaluate(
    eventId: string,
    input: CreateEvaluationInput,
  ): Promise<EventsEvaluations> {
    const eventEvaluation = this.repository.create({
      ...input,
      event: { id: eventId },
      atendee: { id: input.atendeeId },
    });
    return await this.repository.save(eventEvaluation);
  }

  async readAtendeeEvaluation(
    eventId: string,
    atendeeId: string,
  ): Promise<EventsEvaluations> {
    return await this.repository.findOne({
      where: { event: { id: eventId }, atendee: { id: atendeeId } },
    });
  }

  async readAll(filterOptions: EvaluationFilters) {
    const pageOptionsDto = new PageOptionsDto();

    const queryBuilder =
      this.repository.createQueryBuilder('events_evaluations');

    const query = queryEvaluations(filterOptions, queryBuilder);

    query
      .orderBy('events_evaluations.createdAt', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await query.getCount();
    const { entities } = await query.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({
      itemCount,
      pageOptionsDto,
    });

    return new PageDto(evaluationsArrayMapper(entities), pageMetaDto);
  }
}
