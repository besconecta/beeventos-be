import { EventsEvaluations } from '../../../entities';
import { EvaluationsOutput } from '../../../output';

export const evaluationsArrayMapper = (
  data: EventsEvaluations[],
): EvaluationsOutput[] => {
  return data.map((evaluation: EventsEvaluations) => {
    const output: EvaluationsOutput = {
      id: evaluation.id,
      atendee: evaluation.atendee
        ? `${evaluation.atendee.firstname} ${evaluation.atendee.lastname}`
        : 'Anonimo',
      event: evaluation.event.title,
      rating: evaluation.rating,
      comment: evaluation?.comment,
      createdAt: evaluation.createdAt,
      updatedAt: evaluation.updatedAt,
    };
    return output;
  });
};
