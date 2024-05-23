import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ExceptionsOutput {
  @ApiProperty({
    name: 'statusCode',
    description: 'Código HTTP de resposta',
  })
  @Expose()
  statusCode: number;

  @ApiProperty({
    name: 'timestamp',
    description: 'Momento em que ocorreu o erro',
  })
  @Expose()
  timestamp: Date;

  @ApiProperty({
    name: 'message',
    description: 'Mensagem de erro detalhada',
  })
  @Expose()
  message: string;

  @ApiProperty({
    name: 'route',
    description: 'Rota onde ocorreu o erro',
  })
  @Expose()
  route: string;
}
