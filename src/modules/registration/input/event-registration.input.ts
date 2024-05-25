import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class EventRegistrationInput {
  @ApiProperty({
    name: 'atendeeId',
    description: 'ID do participanete',
    example: '84954707-71ba-48c0-b440-21290d1a411b',
  })
  @IsNotEmpty({ message: 'ID do participante é obrigatório' })
  atendeeId: string;
}
