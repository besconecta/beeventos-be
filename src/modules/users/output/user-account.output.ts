import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { AccountRole } from '../../../shared/enums';

export class UserAccountOutput {
  @ApiProperty({ name: 'id', example: '5aaca898-fe80-46f7-8530-bbcb837a2f49' })
  @Expose()
  id: string;

  @ApiProperty({ name: 'firstname', example: 'Anakin' })
  @Expose()
  firstname: string;

  @ApiProperty({ name: 'lastname', example: 'Skywalker' })
  @Expose()
  lastname: string;

  @ApiProperty({ name: 'email', example: 'anakin@tatooine.com' })
  @Expose()
  email: string;

  @ApiProperty({ name: 'role', example: 'admin | user' })
  @Expose()
  role: AccountRole;

  @ApiProperty({ name: 'createdAt', example: '2024-05-11T15:44:24.561Z' })
  @Expose()
  createdAt: Date;

  @ApiProperty({ name: 'updatedAt', example: '2024-05-11T15:44:24.561Z' })
  @Expose()
  updatedAt: Date;
}
