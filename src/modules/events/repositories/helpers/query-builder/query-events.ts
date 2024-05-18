import { SelectQueryBuilder } from 'typeorm';

import { Events } from '../../../entities';
import { EventsFilters } from '../../../input';

export const queryEvents = (
  filterOptions: EventsFilters,
  queryBuilder: SelectQueryBuilder<Events>,
) => {
  queryBuilder
    .leftJoinAndSelect('events.eventType', 'eventType')
    .leftJoinAndSelect('events.user', 'user');

  if (filterOptions) {
    Object.entries(filterOptions).forEach(([key, value]) => {
      if (value) {
        if (key === 'startAt' || key === 'endAt') {
          const formattedDate = value as string;
          if (key === 'startAt') {
            queryBuilder.andWhere(`events.startAt >= :startAt`, {
              startAt: formattedDate,
            });
          } else if (key === 'endAt') {
            queryBuilder.andWhere(`events.endAt <= :endAt`, {
              endAt: formattedDate,
            });
          }
        } else if (key === 'eventType') {
          queryBuilder.andWhere(
            `UPPER(eventType.description) LIKE UPPER(:eventType)`,
            {
              eventType: `%${value}%`,
            },
          );
        } else {
          queryBuilder.andWhere(`UPPER(events.${key}) LIKE UPPER(:${key})`, {
            [key]: `%${value}%`,
          });
        }
      }
    });
  }

  return queryBuilder;
};
