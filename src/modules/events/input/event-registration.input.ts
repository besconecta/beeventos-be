import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class EventRegistrationInput {
  @ApiProperty({
    name: 'eventId',
    description: 'ID do evento',
    example: '65c02e73-0df2-4eb9-9fdf-4442f0219c96',
  })
  @IsNotEmpty({ message: 'ID do evento é obrigatório' })
  eventId: string;

  @ApiProperty({
    name: 'atendeeId',
    description: 'ID do participanete',
    example: '84954707-71ba-48c0-b440-21290d1a411b',
  })
  @IsNotEmpty({ message: 'ID do participante é obrigatório' })
  atendeeId: string;
}
