import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsOptional, MaxLength } from 'class-validator';

export class UpdateEventTypeInput {
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
  @IsOptional()
  description: string;
}
