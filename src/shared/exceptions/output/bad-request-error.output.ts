import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { BaseErrorOutput } from './base-error.output';

@Expose()
export class BadRequestErrorOutput extends BaseErrorOutput {
  @ApiProperty({
    example: 400,
  })
  statusCode: number;
}
