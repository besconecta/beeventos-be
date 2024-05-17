import { IsOptional } from 'class-validator';

export class EventsFilters {
  @IsOptional()
  title: string;

  @IsOptional()
  local: string;

  @IsOptional()
  type: string;

  @IsOptional()
  startAt: Date;

  @IsOptional()
  endAt: Date;
}
