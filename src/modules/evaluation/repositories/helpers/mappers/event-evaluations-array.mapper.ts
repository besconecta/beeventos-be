import { EventsEvaluations } from '../../../entities';
import { EventEvaluationsOutput } from '../../../output';

export const eventEvaluationsArrayMapper = async (
  data: EventsEvaluations[],
): Promise<EventEvaluationsOutput> => {
  const evaluationsOutput = data.map((evaluation: EventsEvaluations) => {
    return {
      id: evaluation.id,
      atendee: evaluation.atendee
        ? `${evaluation.atendee.firstname} ${evaluation.atendee.lastname}`
        : 'Anonimo',
      event: evaluation.event.title,
      rating: evaluation.rating,
      comment: evaluation.comment,
      createdAt: evaluation.createdAt,
      updatedAt: evaluation.updatedAt,
    };
  });

  const averageRating =
    data.reduce(
      (acc, evaluation: EventsEvaluations) => acc + evaluation.rating,
      0,
    ) / data.length;

  return {
    evaluations: evaluationsOutput,
    average: averageRating,
  };
};
