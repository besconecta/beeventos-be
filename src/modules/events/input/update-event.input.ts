import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsUUID, MaxLength } from 'class-validator';

import { EventStatus } from '../enums';

export class UpdateEventInput {
  @ApiProperty({
    name: 'eventTypeId',
    description: 'Tipo de evento',
    example: '5aaca898-fe80-46f7-8530-bbcb837a2f49',
  })
  @IsUUID(4, { message: 'ID com formato inválido' })
  @IsOptional()
  eventTypeId: string;

  @ApiProperty({
    name: 'title',
    description: 'Título do evento',
    example: 'Apresentação XYZ',
  })
  @MaxLength(100, {
    message: 'Título do evento deve conter no máximo 100 caracteres',
  })
  @IsOptional()
  title: string;

  @ApiProperty({
    name: 'about',
    description: 'Sobre o evento',
    example: 'Evento sobre temas diversos',
  })
  @IsOptional()
  about: string;

  @ApiProperty({
    name: 'bannerUrl',
    description: 'Banner para o evento',
  })
  @IsOptional()
  bannerUrl: string;

  @ApiProperty({
    name: 'local',
    description: 'Local do evento',
    example: 'Sala ABC',
  })
  @IsOptional()
  local: string;

  @ApiProperty({
    name: 'startAt',
    description: 'Data/hora de início',
    example: '2024-05-12 20:00:00',
  })
  @IsOptional()
  startAt: Date;

  @ApiProperty({
    name: 'endAt',
    description: 'Data/hora de fim',
    example: '2024-05-12 20:30:00',
  })
  @IsOptional()
  endAt: Date;

  @IsOptional()
  status: EventStatus;
}
