import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CreateEventOutput {
  @ApiProperty({
    name: 'id',
    description: 'ID do evento',
    example: '5aaca898-fe80-46f7-8530-bbcb837a2f49',
  })
  @Expose()
  id: string;

  @ApiProperty({
    name: 'title',
    description: 'Título do evento',
    example: 'Apresentação XYZ',
  })
  @Expose()
  title: string;

  @ApiProperty({
    name: 'local',
    description: 'Local do evento',
    example: 'Sala ABC',
  })
  @Expose()
  local: string;

  @ApiProperty({
    name: 'startAt',
    description: 'Data/hora de início',
    example: '2024-05-12 20:00:00',
  })
  @Expose()
  startAt: Date;

  @ApiProperty({
    name: 'endAt',
    description: 'Data/hora de fim',
    example: '2024-05-12 20:30:00',
  })
  @Expose()
  endAt: Date;
}
