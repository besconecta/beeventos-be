import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDateString, IsOptional } from 'class-validator';

export class EvaluationFilters {
  @ApiProperty({
    name: 'startAt',
    description: 'Data/hora inicial da avaliação',
    example: '2024-05-12T20:00:00.000Z',
  })
  @IsOptional()
  @IsDateString()
  @Transform(({ value }) => new Date(value).toISOString(), {
    toClassOnly: true,
  })
  startAt?: string;

  @ApiProperty({
    name: 'endAt',
    description: 'Data/hora final da avaliação',
    example: '2024-05-12T20:30:00.000Z',
  })
  @IsOptional()
  @IsDateString()
  @Transform(({ value }) => new Date(value).toISOString(), {
    toClassOnly: true,
  })
  endAt?: string;
}
