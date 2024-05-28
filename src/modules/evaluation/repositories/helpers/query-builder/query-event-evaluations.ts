import { SelectQueryBuilder } from 'typeorm';

import { EventsEvaluations } from '../../../entities';

export const queryEventEvaluations = (
  queryBuilder: SelectQueryBuilder<EventsEvaluations>,
) => {
  queryBuilder.leftJoinAndSelect('events_evaluations.event', 'eventId');
  queryBuilder.leftJoinAndSelect('events_evaluations.atendee', 'atendeeId');

  return queryBuilder;
};
