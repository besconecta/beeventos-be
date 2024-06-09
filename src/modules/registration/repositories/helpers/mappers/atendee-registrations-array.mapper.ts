import { EventsRegistrations } from '../../../../../modules/registration/entities';
import { AtendeeRegistrationsOutput } from '../../../../../modules/registration/output';

export const atendeeRegistrationsArrayMapper = (
  data: EventsRegistrations[],
): AtendeeRegistrationsOutput[] => {
  return data.map((registration: EventsRegistrations) => {
    const output: AtendeeRegistrationsOutput = {
      id: registration.id,
      createdAt: registration.createdAt,
      updatedAt: registration.updatedAt,
      event: {
        id: registration.event.id,
        eventType: registration.event.eventType?.description,
        title: registration.event.title,
        about: registration.event.about,
        bannerUrl: registration.event.bannerUrl,
        user: `${registration.event.user?.firstname} ${registration.event.user?.lastname}`,
        local: registration.event.local,
        startAt: registration.event.startAt.toLocaleString('pt-BR'),
        endAt: registration.event.endAt.toLocaleString('pt-BR'),
        status: registration.event.status,
        createdAt: registration.event.createdAt.toLocaleString('pt-BR'),
        updatedAt: registration.event.updatedAt.toLocaleString('pt-BR'),
      },
    };
    return output;
  });
};
