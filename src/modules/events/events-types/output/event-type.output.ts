import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { EventTypeInput } from '../input';

export class EventTypeOutput extends EventTypeInput {
  @ApiProperty({ name: 'id', example: '5aaca898-fe80-46f7-8530-bbcb837a2f49' })
  @Expose()
  id: string;
}
