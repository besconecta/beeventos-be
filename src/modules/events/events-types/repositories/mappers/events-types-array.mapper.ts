import { EventsTypes } from '../../entities';
import { EventTypeOutput } from '../../output';

export const eventsTypesArrayMapper = (
  data: EventsTypes[],
): EventTypeOutput[] => {
  return data.map((eventType: EventsTypes) => {
    const output: EventTypeOutput = {
      id: eventType.id,
      description: eventType.description,
      createdAt: eventType.createdAt.toLocaleString('pt-BR'),
      updatedAt: eventType.updatedAt.toLocaleString('pt-BR'),
    };
    return output;
  });
};
