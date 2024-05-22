import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateEvaluationInput {
  @ApiProperty({
    name: 'atendeeId',
    description: 'ID do participante',
    example: '5aaca898-fe80-46f7-8530-bbcb837a2f49',
  })
  @IsUUID(4, { message: 'ID com formato inválido' })
  @IsNotEmpty({ message: 'ID do participante é obrigatório' })
  atendeeId: string;

  @ApiProperty({
    name: 'rating',
    description: 'Nota do evento',
    example: 4,
  })
  @IsNotEmpty({ message: 'É necessário informar uma nota para o evento' })
  rating: number;

  @ApiProperty({
    name: 'comment',
    description: 'Comentários adicionais',
    example:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis libero sit amet interdum laoreet. In ac tempus nunc, ut posuere nulla. ',
  })
  @IsOptional()
  comment: string;

  @ApiProperty({
    name: 'anonymous',
    description: 'Avaliação anônima?',
    example: 'true | false',
  })
  @IsNotEmpty({ message: 'Informe se a sua avaliação deve ser anônima ' })
  anonymous: boolean;
}
