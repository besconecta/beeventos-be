import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { AccountRole } from '../../../shared/enums';

export class AtendeeAccountOutput {
  @ApiProperty({ name: 'id', example: '5aaca898-fe80-46f7-8530-bbcb837a2f49' })
  @Expose()
  id: string;

  @ApiProperty({ name: 'firstname', example: 'Luke' })
  @Expose()
  firstname: string;

  @ApiProperty({ name: 'lastname', example: 'Skywalker' })
  @Expose()
  lastname: string;

  @ApiProperty({ name: 'email', example: 'luke@tatooine.com' })
  @Expose()
  email: string;

  @ApiProperty({ name: 'role', example: 'atendee' })
  @Expose()
  role: AccountRole;
}
