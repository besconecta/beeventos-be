import { Events } from '../../entities';
import { EventOutput } from '../../output';

export const eventsMapper = (data: Events): EventOutput => {
  const output: EventOutput = {
    id: data.id,
    title: data.title,
    local: data.local,
    startAt: data.startAt.toLocaleString('pt-BR'),
    endAt: data.endAt.toLocaleString('pt-BR'),
    status: data.status,
    createdAt: data.createdAt.toLocaleString('pt-BR'),
    updatedAt: data.updatedAt.toLocaleString('pt-BR'),
  };
  return output;
};
