import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class EvaluationsOutput {
  @ApiProperty({
    name: 'id',
    description: 'ID do avaliação',
    example: '5aaca898-fe80-46f7-8530-bbcb837a2f49',
  })
  @Expose()
  id: string;

  @ApiProperty({
    name: 'atendee',
    description: 'Participante',
    example: 'Anakin Skywallker',
  })
  @Expose()
  atendee: string;

  @ApiProperty({
    name: 'event',
    description: 'Titulo do evento',
    example: 'Apresentação XYZ',
  })
  @Expose()
  event: string;

  @ApiProperty({
    name: 'rating',
    description: 'Nota',
    example: 4,
  })
  @Expose()
  rating: number;

  @ApiProperty({
    name: 'createdAt',
    description: 'Data/hora de criação',
    example: '2024-05-12 20:30:00',
  })
  @Expose()
  createdAt: Date | string;

  @ApiProperty({
    name: 'updatedAt',
    description: 'Data/hora de atualização',
    example: '2024-05-12 20:30:00',
  })
  @Expose()
  updatedAt: Date | string;
}
