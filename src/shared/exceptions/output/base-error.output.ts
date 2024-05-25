import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

@Expose()
export class BaseErrorOutput {
  @ApiProperty({
    name: 'statusCode',
    description: 'Status HTTP da requisição',
    type: 'number',
  })
  statusCode: number;

  @ApiProperty({
    name: 'timestamp',
    type: 'date',
    description: 'Data e hora em que ocorreu o erro',
    example: '14:00:00 PM',
  })
  timestamp: Date;

  @ApiProperty({
    name: 'message',
    type: 'string',
    description: 'Mensagem de erro detalhada',
  })
  message: string;
}
