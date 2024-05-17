import { Events } from '../../../entities';
import { EventOutput } from '../../../output';

export const eventsArrayMapper = (data: Events[]): EventOutput[] => {
  return data.map((event: Events) => {
    const output: EventOutput = {
      id: event.id,
      title: event.title,
      local: event.local,
      startAt: event.startAt.toLocaleString('pt-BR'),
      endAt: event.endAt.toLocaleString('pt-BR'),
      status: event.status,
      createdAt: event.createdAt.toLocaleString('pt-BR'),
      updatedAt: event.updatedAt.toLocaleString('pt-BR'),
    };
    return output;
  });
};
