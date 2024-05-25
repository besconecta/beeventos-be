import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { BaseErrorOutput } from './base-error.output';

@Expose()
export class UnauthorizedErrorOutput extends BaseErrorOutput {
  @ApiProperty({
    example: 401,
  })
  statusCode: number;

  @ApiProperty({
    example: 'Usuário sem permissão',
  })
  message: string;
}
