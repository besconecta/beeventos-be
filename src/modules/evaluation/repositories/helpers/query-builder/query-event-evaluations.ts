import { SelectQueryBuilder } from 'typeorm';

import { EventsEvaluations } from '../../../entities';
import { EvaluationFilters } from '../../../input';

export const queryEventEvaluations = (
  filterOptions: EvaluationFilters,
  queryBuilder: SelectQueryBuilder<EventsEvaluations>,
) => {
  queryBuilder.leftJoinAndSelect('events_evaluations.event', 'eventId');
  queryBuilder.leftJoinAndSelect('events_evaluations.atendee', 'atendeeId');

  if (filterOptions) {
    if (filterOptions.startAt) {
      console.log('Applying startAt filter:', filterOptions.startAt);
      queryBuilder.andWhere('events_evaluations.createdAt >= :startAt', {
        startAt: filterOptions.startAt,
      });
    }

    if (filterOptions.endAt) {
      console.log('Applying endAt filter:', filterOptions.endAt);
      queryBuilder.andWhere('events_evaluations.createdAt <= :endAt', {
        endAt: filterOptions.endAt,
      });
    }

    if (filterOptions.anonymous) {
      console.log('Applying anonymous filter:', filterOptions.anonymous);
      queryBuilder.andWhere('events_evaluations.anonymous = :anonymous', {
        anonymous: filterOptions.anonymous,
      });
    }
  }

  return queryBuilder;
};
