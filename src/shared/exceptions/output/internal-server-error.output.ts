import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { BaseErrorOutput } from './base-error.output';

@Expose()
export class InternalServerErrorOutput extends BaseErrorOutput {
  @ApiProperty({
    example: 500,
  })
  statusCode: number;

  @ApiProperty({
    example: 'Houve um erro interno ao processar solicitação',
  })
  message: string;
}
