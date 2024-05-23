import { Events } from '../../../entities';
import { EventOutput } from '../../../output';

export const eventsArrayMapper = (data: Events[]): EventOutput[] => {
  return data.map((event: Events) => {
    const output: EventOutput = {
      id: event.id,
      eventType: event.eventType ? event.eventType.description : null,
      title: event.title,
      about: event.about,
      bannerUrl: event.bannerUrl,
      user: `${event.user.firstname} ${event.user.lastname}`,
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
