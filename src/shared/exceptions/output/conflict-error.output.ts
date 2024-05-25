import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { BaseErrorOutput } from './base-error.output';

@Expose()
export class ConflictErrorOutput extends BaseErrorOutput {
  @ApiProperty({
    example: 409,
  })
  statusCode: number;

  @ApiProperty({
    example:
      'Registro duplicado: Key (field)=(description_field) already exists',
  })
  message: string;
}
