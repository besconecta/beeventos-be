import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class EventRegistrationInput {
  @ApiProperty({
    name: 'events',
    example: 'ID do evento',
  })
  @IsNotEmpty({ message: 'ID do evento é obrigatório' })
  eventId: string;

  @ApiProperty({
    name: 'atendee',
    example: 'ID do participanete',
  })
  @IsNotEmpty({ message: 'ID do participante é obrigatório' })
  atendeeId: string;
}
