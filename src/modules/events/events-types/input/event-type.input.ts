import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class EventTypeInput {
  @ApiProperty({
    name: 'description',
    description: 'Tipo de evento',
    example: 'Apresentação acadêmica',
  })
  @MaxLength(100, {
    message:
      'A descrição do tipo de evento deve conter no máximo 100 caracteres',
  })
  @Expose()
  @IsNotEmpty({ message: 'A descrição do tipo de evento obrigatória' })
  description: string;
}
