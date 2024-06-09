import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { EventOutput } from '../../../modules/events/output';

export class AtendeeRegistrationsOutput {
  @ApiProperty({
    name: 'id',
    description: 'ID do registro',
    example: '5aaca898-fe80-46f7-8530-bbcb837a2f49',
  })
  @Expose()
  id: string;

  @ApiProperty({
    name: 'createdAt',
    description: 'Data/hora de criação do registro',
    example: '2024-05-12 20:30:00',
  })
  @Expose()
  createdAt: Date | string;

  @ApiProperty({
    name: 'updatedAt',
    description: 'Data/hora de atualização do registro',
    example: '2024-05-12 20:30:00',
  })
  @Expose()
  updatedAt: Date | string;

  @ApiProperty({
    name: 'event',
    description: 'Lista de eventos',
  })
  @Expose()
  event: EventOutput;
}
