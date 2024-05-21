import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDateString, IsOptional } from 'class-validator';

export class EventsFilters {
  @ApiProperty({
    name: 'title',
    description: 'Título do evento',
    example: 'Apresentação XYZ',
  })
  @IsOptional()
  title: string;

  @ApiProperty({
    name: 'local',
    description: 'Local do evento',
    example: 'Sala ABC',
  })
  @IsOptional()
  local: string;

  @ApiProperty({
    name: 'eventType',
    description: 'Descrição do tipo de evento',
    example: 'Apresentação acadêmica',
  })
  @IsOptional()
  eventType: string;

  @ApiProperty({
    name: 'startAt',
    description: 'Data/hora de início do evento',
    example: '2024-05-12 20:00:00',
  })
  @IsOptional()
  @IsDateString()
  @Transform(({ value }) => new Date(value).toISOString(), {
    toClassOnly: true,
  })
  startAt: string;

  @ApiProperty({
    name: 'endAt',
    description: 'Data/hora do fim do evento',
    example: '2024-05-12 20:30:00',
  })
  @IsOptional()
  @IsDateString()
  @Transform(({ value }) => new Date(value).toISOString(), {
    toClassOnly: true,
  })
  endAt: string;
}
