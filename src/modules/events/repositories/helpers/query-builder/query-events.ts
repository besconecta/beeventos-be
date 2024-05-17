import { SelectQueryBuilder } from 'typeorm';

import { Events } from '../../../entities';
import { EventsFilters } from '../../../input';

export const queryEvents = (
  filterOptions: EventsFilters,
  queryBuilder: SelectQueryBuilder<Events>,
) => {
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
