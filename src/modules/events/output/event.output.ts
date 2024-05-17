import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class EventOutput {
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
  startAt: Date | string;

  @ApiProperty({
    name: 'endAt',
    description: 'Data/hora de fim',
    example: '2024-05-12 20:30:00',
  })
  @Expose()
  endAt: Date | string;

  @ApiProperty({
    name: 'createdAt',
    description: 'Data/hora de criação',
    example: '2024-05-12 20:30:00',
  })
  @Expose()
  createdAt: Date | string;

  @ApiProperty({
    name: 'status',
    description: 'Status do evento',
    example: 'started',
  })
  @Expose()
  status: string;

  @ApiProperty({
    name: 'updatedAt',
    description: 'Data/hora de atualização',
    example: '2024-05-12 20:30:00',
  })
  @Expose()
  updatedAt: Date | string;
}
