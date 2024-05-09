import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserAccountDto {
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
}
