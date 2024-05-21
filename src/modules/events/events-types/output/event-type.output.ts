import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class EventTypeOutput {
  @ApiProperty({ name: 'id', example: '5aaca898-fe80-46f7-8530-bbcb837a2f49' })
  @Expose()
  id: string;

  @ApiProperty({ name: 'description', example: 'Tipo XYZ' })
  @Expose()
  description: string;

  @ApiProperty({ name: 'createdAt', example: '2024-05-11T15:44:24.561Z' })
  @Expose()
  createdAt: Date | string;

  @ApiProperty({ name: 'updatedAt', example: '2024-05-11T15:44:24.561Z' })
  @Expose()
  updatedAt: Date | string;
}
