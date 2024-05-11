import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthAtendeeInput {
  @ApiProperty({
    name: 'email',
    example: 'luke@tatooine.com',
  })
  @IsEmail({}, { message: 'Precisa ser um e-mail válido' })
  @IsNotEmpty({ message: 'E-mail é obrigatório' })
  email: string;

  @ApiProperty({
    name: 'password',
    example: '@LukeSky2024',
  })
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  password: string;
}
