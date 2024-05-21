import { EventsTypes } from '../../entities';
import { EventTypeOutput } from '../../output';

export const eventsTypesMapper = (data: EventsTypes): EventTypeOutput => {
  const output: EventTypeOutput = {
    id: data.id,
    description: data.description,
    createdAt: data.createdAt.toLocaleString('pt-BR'),
    updatedAt: data.updatedAt.toLocaleString('pt-BR'),
  };
  return output;
};
