import { EventsTypes } from '../../entities';
import { EventTypeOutput } from '../../output';

export const eventsTypesArrayMapper = (
  data: EventsTypes[],
): EventTypeOutput[] => {
  return data.map((eventType: EventsTypes) => {
    const output: EventTypeOutput = {
      id: eventType.id,
      description: eventType.description,
      createdAt: eventType.createdAt,
      updatedAt: eventType.updatedAt,
    };
    return output;
  });
};
