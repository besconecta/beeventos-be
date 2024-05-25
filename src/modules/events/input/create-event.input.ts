import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsUUID, MaxLength } from 'class-validator';

import { EventStatus } from '../enums';

export class CreateEventInput {
  @ApiProperty({
    name: 'eventTypeId',
    description: 'Tipo de evento',
    example: '5aaca898-fe80-46f7-8530-bbcb837a2f49',
  })
  @IsUUID(4, { message: 'ID do evento com formato inválido' })
  @IsNotEmpty({ message: 'ID do tipo de evento é obrigatório' })
  eventTypeId: string;

  @ApiProperty({
    name: 'userId',
    description: 'ID do usuário',
    example: '0186d0f7-28b3-4826-80cb-2e8134e9b2bf',
  })
  @IsUUID(4, { message: 'ID do usuário com formato inválido' })
  @IsNotEmpty({ message: 'ID do usuário é obrigatório' })
  userId: string;

  @ApiProperty({
    name: 'title',
    description: 'Título do evento',
    example: 'Apresentação XYZ',
  })
  @MaxLength(100, {
    message: 'Título do evento deve conter no máximo 100 caracteres',
  })
  @IsNotEmpty({ message: 'Título do evento é obrigatório' })
  title: string;

  @ApiProperty({
    name: 'about',
    description: 'Sobre o evento',
    example: 'Evento sobre temas diversos',
  })
  @IsNotEmpty({ message: 'Descrição do evento é obrigatória' })
  about: string;

  @ApiProperty({
    name: 'bannerUrl',
    description: 'Banner para o evento',
  })
  bannerUrl?: string;

  @ApiProperty({
    name: 'local',
    description: 'Local do evento',
    example: 'Sala ABC',
  })
  @IsNotEmpty({ message: 'Local do evento é obrigatório' })
  local: string;

  @ApiProperty({
    name: 'status',
    description: 'Status do evento',
    example: 'idle | started | finished',
  })
  @IsEnum(EventStatus, {
    message: 'Status do evento deve ser: idle, started ou finished',
  })
  @IsNotEmpty({ message: 'Status do evento é obrigatório' })
  status: EventStatus;

  @ApiProperty({
    name: 'startAt',
    description: 'Data/hora de início',
    example: '2024-05-12 20:00:00',
  })
  startAt: Date;

  @ApiProperty({
    name: 'endAt',
    description: 'Data/hora de fim',
    example: '2024-05-12 20:30:00',
  })
  endAt: Date;
}
