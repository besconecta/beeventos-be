import { Transform } from 'class-transformer';
import { IsDateString, IsOptional } from 'class-validator';

export class EventsFilters {
  @IsOptional()
  title: string;

  @IsOptional()
  local: string;

  @IsOptional()
  type: string;

  @IsOptional()
  @IsDateString()
  @Transform(({ value }) => new Date(value).toISOString(), {
    toClassOnly: true,
  })
  startAt: string;

  @IsOptional()
  @IsDateString()
  @Transform(({ value }) => new Date(value).toISOString(), {
    toClassOnly: true,
  })
  endAt: string;
}
