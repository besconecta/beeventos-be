import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { CreateEventTypeInput } from '../input';

export class EventTypeOutput extends CreateEventTypeInput {
  @ApiProperty({ name: 'id', example: '5aaca898-fe80-46f7-8530-bbcb837a2f49' })
  @Expose()
  id: string;

  @ApiProperty({ name: 'createdAt', example: '2024-05-11T15:44:24.561Z' })
  @Expose()
  createdAt: Date;

  @ApiProperty({ name: 'updatedAt', example: '2024-05-11T15:44:24.561Z' })
  @Expose()
  updatedAt: Date;
}
