import { Events } from '../../../entities';
import { EventOutput } from '../../../output';

export const eventsMapper = (data: Events): EventOutput => {
  const output: EventOutput = {
    id: data.id,
    eventType: data.eventType ? data.eventType.description : null,
    title: data.title,
    about: data.about,
    bannerUrl: data.bannerUrl,
    user: `${data.user.firstname} ${data.user.lastname}`,
    local: data.local,
    startAt: data.startAt.toLocaleString('pt-BR'),
    endAt: data.endAt.toLocaleString('pt-BR'),
    status: data.status,
    createdAt: data.createdAt.toLocaleString('pt-BR'),
    updatedAt: data.updatedAt.toLocaleString('pt-BR'),
  };
  return output;
};
