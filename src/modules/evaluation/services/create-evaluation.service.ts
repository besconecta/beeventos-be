import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { ReadAtendeeByIdService } from '../../../modules/atendees/services';
import { EventStatus } from '../../../modules/events/enums';
import { ReadEventByIdService } from '../../../modules/events/services';
import { EventsEvaluations } from '../entities';
import { CreateEvaluationInput } from '../input';
import { EvaluationRepository } from '../repositories';

@Injectable()
export class CreateEvaluationService {
  constructor(
    private readonly evaluationRepository: EvaluationRepository,
    private readonly readEventByIdService: ReadEventByIdService,
    private readonly readAtendeeByIdService: ReadAtendeeByIdService,
  ) {}

  async execute(
    eventId: string,
    input: CreateEvaluationInput,
  ): Promise<EventsEvaluations> {
    if (!input.anonymous && !input.atendeeId) {
      throw new BadRequestException(
        'Informe o ID do participante ou crie uma avaliação anônima',
      );
    }

    if (input.anonymous && input.atendeeId) {
      throw new BadRequestException(
        'ID do participante não é necessário para criar uma avaliação anônima',
      );
    }

    if (!input.anonymous && input.atendeeId) {
      const atendee = await this.readAtendeeByIdService.execute(
        input.atendeeId,
      );

      const event = await this.readEventByIdService.execute(eventId);

      if (!event) {
        throw new NotFoundException('Evento não encontrado');
      }

      if (event.status !== EventStatus.FINISHED) {
        throw new BadRequestException('Este evento ainda não foi finalizado');
      }

      if (!atendee) {
        throw new NotFoundException('Participante não encontrado');
      }

      const existingEvaluation =
        await this.evaluationRepository.readAtendeeEvaluation(
          event.id,
          atendee.id,
        );

      if (existingEvaluation) {
        throw new ConflictException('Participante já avaliou este evento');
      }
      return await this.evaluationRepository.evaluate(event.id, input);
    }
    return await this.evaluationRepository.evaluate(eventId, input);
  }
}
